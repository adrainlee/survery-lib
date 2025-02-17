// UI 元素处理
export const ui = {
    // 版本选择相关元素
    versionSelect: document.getElementById('versionSelect'),
    compareVersionSelect: document.getElementById('compareVersionSelect'),
    compareMode: document.getElementById('compareMode'),
    versionPanel: document.getElementById('versionPanel'),

    // 统计数据显示元素
    totalResponses: document.getElementById('totalResponses'),
    compareTotalResponses: document.getElementById('compareTotalResponses'),
    averageScore: document.getElementById('averageScore'),
    compareAverageScore: document.getElementById('compareAverageScore'),
    
    // 分页相关元素
    prevPage: document.getElementById('prevPage'),
    nextPage: document.getElementById('nextPage'),
    startIndex: document.getElementById('startIndex'),
    endIndex: document.getElementById('endIndex'),
    totalItems: document.getElementById('totalItems'),

    // 表格元素
    scoresTableBody: document.getElementById('scoresTableBody'),
    compareTableBody: document.getElementById('compareTableBody')
};

// UI 更新函数
export const uiUpdaters = {
    // 更新版本选择器
    updateVersionSelectors: (versions) => {
        ui.versionSelect.innerHTML = '<option value="">选择版本</option>';
        ui.compareVersionSelect.innerHTML = '<option value="">选择对比版本</option>';
        
        versions.forEach(version => {
            const option = document.createElement('option');
            option.value = version.version;
            option.textContent = `版本 ${version.version}`;
            ui.versionSelect.appendChild(option.cloneNode(true));
            ui.compareVersionSelect.appendChild(option.cloneNode(true));
        });
    },

    // 更新版本信息面板
    updateVersionInfo: (version, elementId) => {
        const container = document.getElementById(elementId);
        if (!container) return;

        container.innerHTML = `
            <div class="text-sm">
                <p><span class="font-medium">版本号:</span> ${version.version}</p>
                <p><span class="font-medium">标题:</span> ${version.title}</p>
                <p><span class="font-medium">描述:</span> ${version.description || '无'}</p>
                <p><span class="font-medium">生效时间:</span> ${new Date(version.validFrom).toLocaleString()}</p>
                ${version.validTo ? `<p><span class="font-medium">失效时间:</span> ${new Date(version.validTo).toLocaleString()}</p>` : ''}
            </div>
        `;
    },

    // 更新统计数据显示
    updateStatistics: (data, isCompare = false) => {
        if (!isCompare) {
            ui.totalResponses.textContent = data.totalResponses;
            ui.averageScore.textContent = data.averageScore;
        } else {
            ui.compareTotalResponses.textContent = `对比: ${data.totalResponses}`;
            ui.compareAverageScore.textContent = `对比: ${data.averageScore}`;
        }
    },

    // 更新得分表格
    updateScoresTable: (responses) => {
        ui.scoresTableBody.innerHTML = '';
        
        responses.forEach(response => {
            const tr = document.createElement('tr');
            const date = new Date(response.createdAt).toLocaleString();
            const satisfaction = response.answers.satisfaction || 0;
            const features = (response.answers.features || []).length;
            const totalScore = satisfaction + features;

            tr.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${date}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${response.surveyVersion}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${response.respondent.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${response.respondent.age}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${satisfaction}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${features}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">${totalScore}</td>
            `;
            ui.scoresTableBody.appendChild(tr);
        });
    },

    // 更新分页信息
    updatePagination: (currentPage, pageSize, totalItems) => {
        const startIndex = (currentPage - 1) * pageSize + 1;
        const endIndex = Math.min(currentPage * pageSize, totalItems);
        
        ui.startIndex.textContent = startIndex;
        ui.endIndex.textContent = endIndex;
        ui.totalItems.textContent = totalItems;
        
        ui.prevPage.disabled = currentPage === 1;
        ui.nextPage.disabled = currentPage * pageSize >= totalItems;
    },

    // 切换比较模式
    toggleCompareMode: (enabled) => {
        ui.compareVersionSelect.classList.toggle('hidden', !enabled);
        document.querySelectorAll('.compare-data').forEach(el => {
            el.classList.toggle('hidden', !enabled);
        });
    }
};

// 导出功能
export const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "问卷数据");
    XLSX.writeFile(workbook, `问卷统计_${new Date().toISOString().split('T')[0]}.xlsx`);
};