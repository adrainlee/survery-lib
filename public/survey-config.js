const surveyJson = {
    title: "用户体验调查问卷",
    description: "感谢您参与本次调查，您的反馈对我们很重要",
    showProgressBar: "top",
    progressBarType: "buttons",
    showPreviewBeforeComplete: "showAnsweredQuestions",
    firstPageIsStarted: true,
    startSurveyText: "开始调查",
    completeText: "提交",
    pagePrevText: "上一页",
    pageNextText: "下一页",
    pages: [
        {
            name: "start",
            elements: [
                {
                    type: "html",
                    html: "<div class='alert alert-info'>这份调查大约需要3-5分钟完成。您的所有回答都将被严格保密。</div>"
                }
            ]
        },
        {
            name: "personalInfo",
            title: "基本信息",
            elements: [
                {
                    type: "text",
                    name: "name",
                    title: "您的姓名:",
                    isRequired: true,
                    placeholder: "请输入您的姓名"
                },
                {
                    type: "dropdown",
                    name: "age",
                    title: "您的年龄段:",
                    isRequired: true,
                    placeholder: "请选择年龄段",
                    choices: [
                        "18岁以下",
                        "18-24岁",
                        "25-34岁",
                        "35-44岁",
                        "45-54岁",
                        "55岁以上"
                    ]
                }
            ]
        },
        {
            name: "productFeedback",
            title: "产品反馈",
            elements: [
                {
                    type: "rating",
                    name: "satisfaction",
                    title: "您对我们的产品总体满意度如何？",
                    isRequired: true,
                    rateMax: 5,
                    minRateDescription: "非常不满意",
                    maxRateDescription: "非常满意"
                },
                {
                    type: "checkbox",
                    name: "features",
                    title: "您最喜欢产品的哪些特性？",
                    isRequired: true,
                    choices: [
                        "易用性",
                        "功能丰富",
                        "性能表现",
                        "界面设计",
                        "客户支持"
                    ],
                    hasOther: true,
                    otherText: "其他"
                }
            ]
        },
        {
            name: "suggestions",
            title: "建议与反馈",
            elements: [
                {
                    type: "comment",
                    name: "improvements",
                    title: "您对产品有什么改进建议？",
                    isRequired: false,
                    placeholder: "请输入您的建议"
                }
            ]
        }
    ],
    completedHtml: "<div class='alert alert-success text-center'><h4 class='alert-heading'>感谢您完成本次调查！</h4><p class='mb-0'>您的反馈对我们很重要。</p><a href='/' class='btn btn-primary mt-3'>返回首页</a></div>"
};