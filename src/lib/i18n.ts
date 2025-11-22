// Multi-language translations
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      insights: 'Insights',
      researchPlans: 'Research Plans',
      agents: 'Agents',
      tools: 'Tools',
      knowledge: 'Knowledge',
      visualizations: 'Visualizations',
    },
    // Home Page
    home: {
      title: 'AI Research Platform',
      subtitle: 'Discover Advanced AI Insights and Research',
      description: 'Explore cutting-edge AI research, intelligent agents, and data visualizations powered by advanced analytics.',
      exploreBtn: 'Explore Now',
      selectLanguage: 'Select Language',
    },
    // Insights Page
    insights: {
      title: 'Scientific Insights',
      subtitle: 'Latest AI Discoveries and Research Findings',
      description: 'Explore the most recent scientific insights powered by advanced AI models.',
      noData: 'No insights available yet.',
      discoveryDate: 'Discovery Date',
      aiModel: 'AI Model Used',
      relevance: 'Relevance Score',
      keywords: 'Keywords',
    },
    // Research Plans Page
    researchPlans: {
      title: 'Research Plans',
      subtitle: 'Strategic Research Initiatives',
      description: 'View and manage ongoing research plans and strategic initiatives.',
      noData: 'No research plans available yet.',
      goal: 'Research Goal',
      methodology: 'Methodology',
      milestones: 'Key Milestones',
      startDate: 'Start Date',
      endDate: 'End Date',
      status: 'Status',
      summary: 'Plan Summary',
    },
    // Agents Page
    agents: {
      title: 'Intelligent Agents',
      subtitle: 'Advanced AI Agents for Research',
      description: 'Meet our specialized AI agents designed for various research tasks.',
      noData: 'No agents available yet.',
      specialization: 'Specialization',
      status: 'Status',
      creationDate: 'Creation Date',
    },
    // Tools Page
    tools: {
      title: 'Intelligent Tools',
      subtitle: 'Powerful Tools for Research',
      description: 'Discover the tools and integrations that power our research platform.',
      noData: 'No tools available yet.',
      toolType: 'Tool Type',
      developer: 'Developer',
      version: 'Version',
      documentation: 'Documentation',
      integrationDetails: 'Integration Details',
    },
    // Knowledge Page
    knowledge: {
      title: 'Knowledge Network',
      subtitle: 'Interconnected Concepts and Ideas',
      description: 'Explore our comprehensive knowledge network of research concepts.',
      noData: 'No concepts available yet.',
      definition: 'Definition',
      conceptType: 'Concept Type',
      relatedConcepts: 'Related Concepts',
      keywords: 'Keywords',
      source: 'Source',
    },
    // Visualizations Page
    visualizations: {
      title: 'Data Visualizations',
      subtitle: 'Visual Analysis and Insights',
      description: 'Explore interactive visualizations of research data and findings.',
      noData: 'No visualizations available yet.',
      analysisDate: 'Analysis Date',
      summary: 'Summary of Findings',
      keyMetrics: 'Key Metrics',
      source: 'Source',
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      backHome: 'Back to Home',
      viewMore: 'View More',
      readMore: 'Read More',
    },
  },
  zh: {
    // 导航
    nav: {
      home: '首页',
      insights: '科学洞察',
      researchPlans: '研究计划',
      agents: '智能代理',
      tools: '工具',
      knowledge: '知识库',
      visualizations: '数据可视化',
    },
    // 首页
    home: {
      title: 'AI 研究平台',
      subtitle: '发现先进的 AI 洞察和研究',
      description: '探索尖端 AI 研究、智能代理和由高级分析驱动的数据可视化。',
      exploreBtn: '立即探索',
      selectLanguage: '选择语言',
    },
    // 科学洞察页面
    insights: {
      title: '科学洞察',
      subtitle: '最新 AI 发现和研究成果',
      description: '探索由先进 AI 模型驱动的最新科学洞察。',
      noData: '暂无洞察数据。',
      discoveryDate: '发现日期',
      aiModel: '使用的 AI 模型',
      relevance: '相关性评分',
      keywords: '关键词',
    },
    // 研究计划页面
    researchPlans: {
      title: '研究计划',
      subtitle: '战略研究计划',
      description: '查看和管理正在进行的研究计划和战略计划。',
      noData: '暂无研究计划。',
      goal: '研究目标',
      methodology: '研究方法',
      milestones: '关键里程碑',
      startDate: '开始日期',
      endDate: '结束日期',
      status: '状态',
      summary: '计划摘要',
    },
    // 智能代理页面
    agents: {
      title: '智能代理',
      subtitle: '用于研究的高级 AI 代理',
      description: '认识我们为各种研究任务设计的专业 AI 代理。',
      noData: '暂无代理数据。',
      specialization: '专业方向',
      status: '状态',
      creationDate: '创建日期',
    },
    // 工具页面
    tools: {
      title: '智能工具',
      subtitle: '强大的研究工具',
      description: '发现支持我们研究平台的工具和集成。',
      noData: '暂无工具数据。',
      toolType: '工具类型',
      developer: '开发者',
      version: '版本',
      documentation: '文档',
      integrationDetails: '集成详情',
    },
    // 知识库页面
    knowledge: {
      title: '知识网络',
      subtitle: '互联的概念和想法',
      description: '探索我们全面的研究概念知识网络。',
      noData: '暂无概念数据。',
      definition: '定义',
      conceptType: '概念类型',
      relatedConcepts: '相关概念',
      keywords: '关键词',
      source: '来源',
    },
    // 数据可视化页面
    visualizations: {
      title: '数据可视化',
      subtitle: '可视化分析和洞察',
      description: '探索研究数据和发现的交互式可视化。',
      noData: '暂无可视化数据。',
      analysisDate: '分析日期',
      summary: '发现摘要',
      keyMetrics: '关键指标',
      source: '来源',
    },
    // 通用
    common: {
      loading: '加载中...',
      error: '发生错误',
      backHome: '返回首页',
      viewMore: '查看更多',
      readMore: '阅读更多',
    },
  },
};

export type Language = 'en' | 'zh';
export type TranslationKey = keyof typeof translations.en;
