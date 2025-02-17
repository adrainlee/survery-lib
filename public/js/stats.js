import { initCharts, updateCharts } from './charts.js';
import { versionsApi, statsApi, dataUtils } from './api.js';
import { ui, uiUpdaters } from './ui.js';

class StatsManager {
    constructor() {
        this.charts = null;
        this.currentPage = 1;
        this.pageSize = 10;
        this.compareMode = false;
        this.init();
    }

    async init() {
        // 初始化图表
        this.charts = initCharts();
        
        // 加载版本列表
        await this.loadVersions();
        
        // 加载初始数据
        await this.loadData();
        
        // 设置事件监听
        this.setupEventListeners();
    }

    async loadVersions() {
        try {
            const versions = await versionsApi.getAllVersions();
            uiUpdaters.updateVersionSelectors(versions);
            
            // 如果有活跃版本，自动选择
            const activeVersion = versions.find(v => v.active);
            if (activeVersion) {
                ui.versionSelect.value = activeVersion.version;
            }
        } catch (error) {
            console.error('加载版本失败:', error);
        }
    }

    async loadData() {
        try {
            const version = ui.versionSelect.value;
            const compareVersion = ui.compareVersionSelect.value;
            
            // 加载当前版本数据
            const data = await statsApi.getStatistics(version);
            this.updateDisplay(data, false);

            // 如果是比较模式，加载对比版本数据
            if (this.compareMode && compareVersion) {
                const compareData = await statsApi.getStatistics(compareVersion);
                this.updateDisplay(compareData, true);
            }

            // 加载详细数据
            await this.loadResponses();
        } catch (error) {
            console.error('加载数据失败:', error);
        }
    }

    async loadResponses() {
        try {
            const version = ui.versionSelect.value;
            const { responses, total } = await statsApi.getResponses(
                this.currentPage,
                this.pageSize,
                version
            );

            uiUpdaters.updateScoresTable(responses);
            uiUpdaters.updatePagination(this.currentPage, this.pageSize, total);
        } catch (error) {
            console.error('加载响应数据失败:', error);
        }
    }

    updateDisplay(data, isCompare) {
        // 更新图表
        updateCharts(this.charts, data, isCompare);
        
        // 更新统计数据
        const avgScore = dataUtils.calculateAverageScore(data.satisfactionStats);
        uiUpdaters.updateStatistics({
            totalResponses: data.totalResponses,
            averageScore: avgScore
        }, isCompare);
    }

    setupEventListeners() {
        // 版本选择变更
        ui.versionSelect.addEventListener('change', () => this.loadData());
        ui.compareVersionSelect.addEventListener('change', () => this.loadData());

        // 比较模式切换
        ui.compareMode.addEventListener('change', (e) => {
            this.compareMode = e.target.checked;
            uiUpdaters.toggleCompareMode(this.compareMode);
            this.loadData();
        });

        // 分页控制
        ui.prevPage.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadResponses();
            }
        });

        ui.nextPage.addEventListener('click', () => {
            this.currentPage++;
            this.loadResponses();
        });

        // 导出数据
        document.getElementById('exportBtn').addEventListener('click', async () => {
            try {
                const version = ui.versionSelect.value;
                const data = await statsApi.exportData(version);
                const formattedData = dataUtils.formatExportData(data);
                exportToExcel(formattedData);
            } catch (error) {
                console.error('导出数据失败:', error);
            }
        });
    }
}

// 初始化统计管理器
document.addEventListener('DOMContentLoaded', () => {
    new StatsManager();
});