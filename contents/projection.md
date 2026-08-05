<div class="competition-nav">
    <a href="#proj-2025-llm-rl"><span class="nav-year">2025</span><span class="nav-title">AlphaPareto：大模型+多目标强化学习因子挖掘</span></a>
    <a href="#proj-2023-chengdu"><span class="nav-year">2023</span><span class="nav-title">成都市投资分析报告（2022）</span></a>
</div>

<div id="proj-2025-llm-rl" class="competition-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2025年9月 – 至今 <br>
AlphaPareto：基于大模型与多目标强化学习的因子挖掘研究（毕业设计）
</div>

本论文提出融合大语言模型语义感知与多目标强化学习的 **AlphaPareto** 因子挖掘框架，在中国A股市场进行实证研究，实验覆盖沪深300、中证800和全市场三个规模递增的股票池。

**核心思路**：将因子挖掘建模为马尔可夫决策过程，利用 LLM 对演化中的因子库进行语义编码以应对非平稳性，并以多目标向量奖励（预测能力、时序稳定性、扰动鲁棒性、多样性）替代标量奖励，通过帕累托正则化实现多目标协同平衡。

<div style="text-align:center;">
    <img src="static/assets/img/alpha_pareto/overview.png" alt="AlphaPareto Overview" style="width:95%; display:inline-block;">
</div>

#### 主对比实验结果

在 CSI300、CSI800 和全市场（Market）三个数据集上的样本外 IC 表现：

| Method | CSI300 | CSI800 | Market |
|---|---|---|---|---|
| Alpha158 | 2.99% | 4.77% | 4.04% |
| MLP | 1.51% (2.33%) | 4.63% (0.90%) | 7.00% (0.18%) |
| GP | 1.09% (0.82%) | 2.74% (1.40%) | 7.52% (1.53%) |
| AlphaAgent | 0.51% (0.34%) | 0.48% (0.46%) | 1.10% (0.59%) |
| R&D-Agent-Quant | 2.39% (0.96%) | 2.45% (0.73%) | 1.48% (0.91%) |
| AlphaGen | 3.69% (0.66%) | 5.07% (0.63%) | 8.44% (1.09%) |
| AlphaQCM | 0.50% (0.95%) | 4.79% (0.34%) | 9.16% (4.22%) |
| AlphaForge | 2.03% (0.65%) | 4.17% (1.96%) | 5.37% (1.81%) |
| **AlphaPareto** | **3.92% (0.46%)** | **5.70% (0.87%)** | **10.10% (1.01%)** |

**AlphaPareto 在所有三个数据集上均取得最优 IC**，在全市场上相对最强基线的增益达 0.94%。随着股票池规模增大、市场复杂度上升，优势更加显著。

#### 多维度评估

除了预测能力，AlphaPareto 在时间稳定性（RRE）、扰动鲁棒性（PFS）和多样性（DH）三个维度也表现强劲：

<div style="text-align:center;">
    <img src="static/assets/img/alpha_pareto/radar_plot.png" alt="雷达图" style="width:70%; display:inline-block;">
</div>

#### 消融实验

| LLM | MORL | CSI300 | CSI800 | Market |
|---|---|---|---|---|
| | | 3.69% (0.66%) | 5.07% (0.63%) | 8.44% (1.09%) |
| ✓ | | 2.37% (0.68%) | 5.04% (0.42%) | 9.68% (0.83%) |
| | ✓ | **3.99%** (1.27%) | 5.54% (1.03%) | 9.63% (0.80%) |
| ✓ | ✓ | 3.92% (0.46%) | **5.70%** (0.87%) | **10.10%** (1.01%) |

两个模块互补：LLM 语义编码在复杂市场中贡献更显著，多目标优化在所有市场中均稳定有效。

#### LLM 规模敏感性

AlphaPareto 在广泛参数尺度下均表现强劲，但性能呈 **非单调特征**——4B 参数的 Qwen-Embedding-4B 在三个数据集上均取得最优 IC，过大模型反而引入噪声。

#### 投资组合回测

在全市场环境下月度调仓，选前50只股票等权做多，双边交易成本 15BP：

| 模型 | 年化收益 | 最大回撤 | 信息比率 | 夏普比率 |
|---|---|---|---|---|
| Alpha158 | 33.17% | -18.71% | 1.08 | 1.34 |
| AlphaGen | 40.03% | -15.91% | 1.65 | 1.61 |
| **AlphaPareto** | **58.92%** | **-18.12%** | **2.62** | **2.59** |

<div style="text-align:center;">
    <img src="static/assets/img/alpha_pareto/cum_ret_mkt_backtests50_drop5_dailyLog_monthlyChange.png" alt="累计收益率" style="width:90%; display:inline-block;">
</div>

> AlphaPareto 在年化收益率、信息比率和夏普比率上均排名第一，验证了多目标因子挖掘在实际投资组合构建中的经济价值。

---

<div id="proj-2023-chengdu" class="competition-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2023年6月 – 2023年8月 <br>
《成都市投资分析报告（2022）》
</div>

报告以 2022 年统计数据为基础，以成都市历年数据以及全国、四川省、国家中心城市、副省级城市、中西部主要城市等可比性统计数据为参照，选取相应指标，从不同维度对成都市的投资情况进行综合分析和评价。主要负责收集整理可比性统计数据，建立评分模型对成都市现代服务业的投资发展情况展开综合分析，并完成该部分报告撰写，最终报告以成都发展改革白皮书印发。

左图考虑了城镇化率、城镇居民家庭人均可支配收入、年末金融机构贷款余额等维度的金融业综合评分对比；右图为考虑了社会消费品零售总额、公路/铁路/航运货运量等维度的现代物流业综合评分对比。

<div style="text-align:center;">
  <img src="static/assets/img/成都市投资发展-金融业.png" alt="金融业" style="width:46%; display:inline-block;">
  <img src="static/assets/img/成都市投资发展-现代物流业.png" alt="现代物流业" style="width:46%; display:inline-block;">
</div>
