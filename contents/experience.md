<div class="experience-nav">
  <a href="#exp-pa"><span class="nav-title">平安理财 · AI算法</span><span class="nav-year">2026.6 – 2026.8</span></a>
  <a href="#exp-jfz"><span class="nav-title">金斧子基金</span><span class="nav-year">2026.1 – 2026.3</span></a>
  <a href="#exp-suishi"><span class="nav-title">燧石资产</span><span class="nav-year">2025.7 – 2025.9</span></a>
  <a href="#exp-dwzq"><span class="nav-title">东吴证券</span><span class="nav-year">2023.11 – 2024.3</span></a>
</div>

<div id="exp-pa" class="experience-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
平安理财  |  科技运营部 AI 算法应用团队  -  AI 算法实习生  |  2026.6 – 2026.8
</div>

针对 EVA Agent 渐进披露机制下"skill 规模增长 → LLM 选择准确率下滑"的问题，独立完成 skill 选择优化的完整闭环：**数据构建 → 模型微调 → 效果评估 → 工程方案设计**。

#### 工作内容：

- **SkillRouter 检索路由验证与微调**：合并约 7.8 万条 skill（企业 skill + 外部社区 pool），以 query : 正例 : 负例 = 1 : 1 : 10 构造样本，经 HardNegativeMining 与 FalseNegativeFiltering 清洗，产出 **10,140 条**训练数据；基于 **Qwen3-Embedding-0.6B（Bi-Encoder 粗排）+ Qwen3-Reranker-0.6B（Cross-Encoder 重排）** 完成 LoRA 微调，单卡 A800 约 50h。检索 **Hit@1** 在 skill 规模 39 / 78 / 117 下由 57.9% / 35.9% / 31.9% 提升至 **98.7% / 95.6% / 86.3%**，**Hit@40** 由 100% / 97.1% / 83.0% 提升至 **100% / 100% / 91.3%**；Embedding 粗排 100 → Reranker 重排 100 → 取 Top40 喂 LLM 的收敛口径，经隔离生成评估 query 验证。

- **分批并行化工程方案**：全量注入在 skill 超 450 条时触发 1000K 上下文窗口溢出。提出**分批并行化**——将 skill 元数据按 40 条/批切片，各片并行让 LLM 做局部选择，再从候选集收敛定序出最终 skill，单次上下文可控且不训练模型。大规模场景准确率超越全量注入约 **5–6pp**（429 规模 80.51% vs 74.62%），单条 query 响应时间由 5.56s（全量注入，随规模线性增长）降至**恒定约 1.04s**。通过"skill 配比 × 分片数 N=2/3"全矩阵实验定位最优批次量。

<div style="margin:1.2rem 0 0.6rem;">
  <div style="font-weight:700;font-size:1rem;padding:8px 14px;background:linear-gradient(135deg,#1976d2,#42a5f5);color:#fff;border-radius:6px 6px 0 0;text-align:center;">skill 选择准确率对比（query 来源：仅公司 skill，端到端经 LLM 选择）</div>
  <table>
    <thead>
      <tr><th>Skill 规模</th><th>EVA 全量注入</th><th>分批并行化 N=2</th><th>提升</th></tr>
    </thead>
    <tbody>
      <tr><td>39</td><td>88.21%</td><td>86.41%</td><td>—</td></tr>
      <tr><td>117</td><td>84.10%</td><td><strong>86.41%</strong></td><td><strong>+2.3pp</strong></td></tr>
      <tr><td>234</td><td>80.26%</td><td><strong>84.10%</strong></td><td><strong>+3.8pp</strong></td></tr>
      <tr><td>429</td><td>74.62%</td><td><strong>80.51%</strong></td><td><strong>+5.9pp</strong></td></tr>
      <tr><td>450</td><td>超出上下文窗口</td><td><strong>80.13%</strong></td><td>可正常选择</td></tr>
    </tbody>
  </table>
</div>

> 方案取舍：当 skill < 450 时，RAG 方案（训练模型）准确率低于 EVA 现状且需反复微调，ROI 低；> 450 时 RAG 依赖更高检索召回质量、维护成本高。而 EVA 业务场景 skill 预期短期不会爆发式增长，故采用**不训练模型 + 单次注入量小 + 落地风险低**的工程化方案解决。

---

<div id="exp-jfz" class="experience-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
金斧子基金销售有限公司  |  星荣事业群  -  量化策略实习生  |  2026.1 - 2026.3
</div>
独立完成A股高频微观结构日频因子研究，围绕盘口供给、价格推动、流动性摩擦、开盘定价效率与交易集中度构建 50+ 因子框架，形成Minute_logvol_skew、Minute_MPC5_max_v2、tick_LS_99、tick_VD15m等多条稳定Alpha主线，着重关注因子的金融学逻辑以及对隔日的截面Alpha捕捉能力。完善因子检验框架，补充" 因子风格分解模块 "+" FamaMacBeth增量Alpha检验模块 "。

<div style="text-align:center;">
  <img src="static/assets/img/jfz/Minute_logvol_skew_groups_5_20260228_175346.png" alt="Minute_logvol_skew" style="width:40%; display:inline-block;">
  <img src="static/assets/img/jfz/Minute_MPC5_max_v2_groups_5_20260126_111944.png" alt="Minute_MPC5_max_v2" style="width:40%; display:inline-block;">

</div>

<div style="text-align:center;">
  <img src="static/assets/img/jfz/tick_LS_99_groups_5_20260212_134322.png" alt="LS_99" style="width:40%; display:inline-block;">
  <img src="static/assets/img/jfz/tick_VD15m_groups_5_20260319_135954.png" alt="tick_VD15m" style="width:40%; display:inline-block;">
</div>

#### 工作内容：

- 围绕A股L1行情数据，搭建了覆盖订单簿、成交行为、价格发现、流动性摩擦与隔夜反馈的高频因子研究框架。
- 研究重系统实现并迭代了 **50+** 个候选因子，通过统一的回测、相似因子分析和中性化筛选出多条稳健主线：
  - **Minute_logvol_skew**用成交量分布不对称捕捉拥挤交易后的价格修正，
    - 中性化前：年化收益37.99%，年化波动7.69%，夏普比率4.94，最大回撤-7.17%，IC3.47%
    - 行业市值中性化后：年化收益28.19%，年化波动5.30%，夏普比率5.32，最大回撤-5.14%，IC2.42%
  - **Minute_MPC5_max_v2**刻画收盘附近被成交量确认的价格推动
    - 中性化前：年化收益20.64%，年化波动9.15%，夏普比率2.26，最大回撤-11.14%，IC3.57%
    - 行业市值中性化后：年化收益25.04%，年化波动5.65%，夏普比率4.43，最大回撤-4.86%，IC3.16%
  - **tick_LS_99**刻画极端流动性摩擦
    - 中性化前：年化收益44.33%，年化波动11.20%，夏普比率3.96，最大回撤-11.59%，IC5.41%
    - 行业市值中性化后：年化收益24.95%，年化波动6.92%，夏普比率3.60，最大回撤-3.67%，IC3.01%
  - **tick_VD15m**刻画开盘定价效率偏离，均表现出较强的多空净值单调性与可交易性
    - 中性化前：年化收益32.12%，年化波动11.05%，夏普比率2.91，最大回撤-10.39%，IC4.91%
    - 行业市值中性化后：年化收益18.75%，年化波动5.17%，夏普比率3.63，最大回撤-5.26%，IC2.48%

---

<div id="exp-suishi" class="experience-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
燧石资产管理有限公司  |  投研组  -  量化策略实习生  |  2025.7 – 2025.9 
</div>
负责1sTick股票高频因子的挖掘与检验，专注于因子的金融学逻辑和回测表现。主导 ETF 申赎底仓调仓规则的研究与测算，优化 T0 产品收益结构。

<div style="text-align:center;">
  <img src="static/assets/img/FZYB003001levels.png" alt="分层表现" style="width:30%; display:inline-block;">
  <img src="static/assets/img/FZYB003001ic_avg.png" alt="IC表现" style="width:30%; display:inline-block;">
  <img src="static/assets/img/FZYB003001_pnl_plot_45_3.png" alt="产品表现" style="width:30%; display:inline-block;">
</div>

<div style="text-align:center;">
  <img src="static/assets/img/FZYB003001_S.CN.SZSE.000504.png" alt="涨停表现" style="width:30%; display:inline-block;">
  <img src="static/assets/img/FZYB003001_S.CN.SZSE.000906.png" alt="震荡表现" style="width:30%; display:inline-block;">
  <img src="static/assets/img/FZYB003001_S.CN.SZSE.301589.png" alt="跌停表现" style="width:30%; display:inline-block;">
</div>

#### 工作内容:

- 独立设计并迭代开发基于**订单簿微观结构的Alpha因子**，通过刻画买卖双方在主动成交与高档位挂单中的不对称压力，构建具有前瞻性的多空信号；
- 因子在**创业板样本**内回测 (2024.07–2025.07) 实现**年化收益率 2.33\%**、**夏普比率 2.41**，且与现有因子库相关性低于 0.7，具备显著增量信息。
- **主导 ETF 申赎底仓调仓规则的研究与测算**：公司依据 ETF 披露的 PCF（申购赎回清单）按月/周频率配置成分股实物底仓，并通过卖出 ETF 看涨期权对冲市场 Beta 敞口，使产品收益主要来源于日内 T0 交易产生的 Alpha。在此框架下，设计"**市值降序减仓**"调仓规则——优先清仓大市值标的、逐级下移——在跟踪误差约束内将 T0 产品**年化收益由 3.08% 提升至 4.63%**，并通过极限场景测算与下单规模压力测试（放大 4 倍）验证了规则在高交易规模下的稳健性与策略容量。

<div style="overflow-x:auto;">
<table>
<thead>
<tr>
<th rowspan="2">Thres_n</th>
<th rowspan="2">指标</th>
<th colspan="2">T0</th>
<th colspan="2">底仓</th>
<th colspan="2">产品</th>
</tr>
<tr>
<th>调整前</th><th>调整后</th>
<th>调整前</th><th>调整后</th>
<th>调整前</th><th>调整后</th>
</tr>
</thead>
<tbody>
<tr><td rowspan="4">thres_n = 2</td><td>年化收益率</td><td>3.0764%</td><td>3.2423%</td><td>-5.3426%</td><td>-2.3595%</td><td>-2.2663%</td><td>0.8828%</td></tr>
<tr><td>年化波动率</td><td>0.2180%</td><td>0.2341%</td><td>1.6161%</td><td>1.2964%</td><td>1.6550%</td><td>1.3403%</td></tr>
<tr><td>夏普比率</td><td>14.1150</td><td>13.8520</td><td>-3.3059</td><td>-1.8200</td><td>-1.3693</td><td>0.6587</td></tr>
<tr><td>最大回撤</td><td>-0.0094%</td><td>-0.0095%</td><td>-1.1029%</td><td>-0.6462%</td><td>-0.8466%</td><td>-0.5369%</td></tr>
<tr><td rowspan="4">thres_n = 5</td><td>年化收益率</td><td>3.0764%</td><td>4.2925%</td><td>-5.3426%</td><td>-2.6733%</td><td>-2.2663%</td><td>1.6191%</td></tr>
<tr><td>年化波动率</td><td>0.2180%</td><td>0.3468%</td><td>1.6161%</td><td>3.0288%</td><td>1.6550%</td><td>2.9666%</td></tr>
<tr><td>夏普比率</td><td>14.1150</td><td>12.3771</td><td>-3.3059</td><td>-0.8826</td><td>-1.3693</td><td>0.5458</td></tr>
<tr><td>最大回撤</td><td>-0.0094%</td><td>-0.0104%</td><td>-1.1029%</td><td>-1.0660%</td><td>-0.8466%</td><td>-0.7447%</td></tr>
<tr><td rowspan="4">thres_n = 11</td><td>年化收益率</td><td>3.0764%</td><td><strong>5.5171%</strong></td><td>-5.3426%</td><td>-3.1691%</td><td>-2.2663%</td><td>2.3480%</td></tr>
<tr><td>年化波动率</td><td>0.2180%</td><td>0.3966%</td><td>1.6161%</td><td><strong>8.1870%</strong></td><td>1.6550%</td><td><strong>8.0950%</strong></td></tr>
<tr><td>夏普比率</td><td>14.1150</td><td>13.9114</td><td>-3.3059</td><td>-0.3871</td><td>-1.3693</td><td>0.2901</td></tr>
<tr><td>最大回撤</td><td>-0.0094%</td><td>-0.0122%</td><td>-1.1029%</td><td>-2.2716%</td><td>-0.8466%</td><td>-2.1504%</td></tr>
<tr><td rowspan="4">thres_n = 19.5</td><td>年化收益率</td><td>3.0764%</td><td><strong>6.1828%</strong></td><td>-5.3426%</td><td>-4.3423%</td><td>-2.2663%</td><td>1.8405%</td></tr>
<tr><td>年化波动率</td><td>0.2180%</td><td>0.4114%</td><td>1.6161%</td><td><strong>8.6873%</strong></td><td>1.6550%</td><td><strong>8.5832%</strong></td></tr>
<tr><td>夏普比率</td><td>14.1150</td><td>15.0276</td><td>-3.3059</td><td>-0.4998</td><td>-1.3693</td><td>0.2144</td></tr>
<tr><td>最大回撤</td><td>-0.0094%</td><td>-0.0161%</td><td>-1.1029%</td><td>-2.2716%</td><td>-0.8466%</td><td>-2.1504%</td></tr>
</tbody>
</table>
</div>

---

<div id="exp-dwzq" class="experience-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
东吴证券股份有限公司 | 研究所食饮组  -  实习分析师  |  2023.11 – 2024.3
</div>
负责食品饮料行业（调味品&乳制品）数据的收集与整理，以及深度研究报告的撰写。

#### 工作内容:

- 深度参与两家上市公司研究报告和调味品策略报告的撰写，具体工作内容包括数据整理与图表绘制、数据分析与报告撰写、合规底稿的制作与整理。按时按规完成三篇研究报告中负责部分的撰写和修改，撰写内容20000字+。
- 借助Wind、iFinD、欧睿等平台，搜集整理公司数据，包括:内部控制、财务数据、业务规划（产品渠道），绘制关键图表(Excel、PPT)，分析公司发展变动情况；参与上市公司交流会议，记录会议关键信息，如企业盈利预期、渠道扩张以及品牌建设规划。
