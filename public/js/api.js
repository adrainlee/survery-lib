const API_BASE_URL = 'http://localhost:5000/api';

// 版本相关 API
export const versionsApi = {
    // 获取所有版本
    getAllVersions: async () => {
        const response = await fetch(`${API_BASE_URL}/versions`);
        return response.json();
    },

    // 获取当前活跃版本
    getActiveVersion: async () => {
        const response = await fetch(`${API_BASE_URL}/versions/active`);
        return response.json();
    }
};

// 统计数据 API
export const statsApi = {
    // 获取统计数据
    getStatistics: async (version = '') => {
        const url = `${API_BASE_URL}/statistics${version ? `?version=${version}` : ''}`;
        const response = await fetch(url);
        return response.json();
    },

    // 获取问卷响应列表
    getResponses: async (page = 1, limit = 10, version = '') => {
        const url = `${API_BASE_URL}/responses?page=${page}&limit=${limit}${version ? `&version=${version}` : ''}`;
        const response = await fetch(url);
        return response.json();
    },

    // 导出数据
    exportData: async (version = '') => {
        const url = `${API_BASE_URL}/export${version ? `?version=${version}` : ''}`;
        const response = await fetch(url);
        return response.json();
    }
};

// 数据处理工具
export const dataUtils = {
    // 计算平均分
    calculateAverageScore: (satisfactionStats) => {
        const total = satisfactionStats.reduce((acc, curr) => acc + (curr._id * curr.count), 0);
        const count = satisfactionStats.reduce((acc, curr) => acc + curr.count, 0);
        return count > 0 ? (total / count).toFixed(1) : '0.0';
    },

    // 计算版本间的变化
    calculateChange: (current, previous) => {
        if (!previous) return { value: 0, percentage: 0 };
        const change = current - previous;
        const percentage = previous !== 0 ? (change / previous * 100).toFixed(1) : 0;
        return {
            value: change,
            percentage: percentage
        };
    },

    // 格式化导出数据
    formatExportData: (responses) => {
        return responses.map(response => ({
            提交时间: new Date(response.createdAt).toLocaleString(),
            版本: response.surveyVersion,
            姓名: response.respondent.name,
            年龄段: response.respondent.age,
            满意度: response.answers.satisfaction,
            选择功能: response.answers.features ? response.answers.features.join(', ') : '',
            建议: response.answers.improvements || ''
        }));
    }
};