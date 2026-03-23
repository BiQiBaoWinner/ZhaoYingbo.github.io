### **量化策略实习生**

**2025.7 – 2025.9 | 燧石资产管理有限公司**

负责1sTick股票高频因子的挖掘与检验，专注于因子的金融学逻辑和回测表现。参与ETF底仓调优项目，优化产品票池结构，在风险承受范围内最大限度提升产品收益。

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/FZYB003001levels.png" alt="分层表现" style="width:30%; display:inline-block;">
  <img src="/zhaoyingbo.github.io/static/assets/img/FZYB003001ic_avg.png" alt="IC表现" style="width:30%; display:inline-block;">
  <img src="/zhaoyingbo.github.io/static/assets/img/FZYB003001_pnl_plot_45_3.png" alt="产品表现" style="width:30%; display:inline-block;">
</div>

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/FZYB003001_S.CN.SZSE.000504.png" alt="涨停表现" style="width:30%; display:inline-block;">
  <img src="/zhaoyingbo.github.io/static/assets/img/FZYB003001_S.CN.SZSE.000906.png" alt="震荡表现" style="width:30%; display:inline-block;">
  <img src="/zhaoyingbo.github.io/static/assets/img/FZYB003001_S.CN.SZSE.301589.png" alt="跌停表现" style="width:30%; display:inline-block;">
</div>

#### 具体贡献:

- 独立设计并迭代开发基于**订单簿微观结构的Alpha因子**，通过刻画买卖双方在主动成交与高档位挂单中的不对称压力，构建具有前瞻性的多空信号；
- 因子在**创业板样本**内回测 (2024.07–2025.07) 实现**年化收益率 2.33\%**、**夏普比率 2.41**，且与现有因子库相关性低于 0.7，具备显著增量信息。
- 基于手工T0交易员提供的加/减仓票池 (Pool1/Pool2)，设计并实现“**市值权重降序减仓**”调仓逻辑，在控制跟踪误差 (TE ≈ 0.0028) 前提下，将产品**年化收益率由 3.08\% 提升至 4.63\%**(加仓4倍)；进一步测算极限调仓场景，验证在风险可控范围内可实现 6.18\% 年化收益，为产品达标6\%收益目标提供量化支撑。

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/ETFbaseadjust.png" alt="产品表现" style="width:30%;">
</div>

<div style="width:100%;overflow-x:auto;">
<table style="width:100%;min-width:980px;border-collapse:collapse;text-align:center;white-space:nowrap;font-size:14px;line-height:1.5;">
  <thead>
    <tr>
      <th rowspan="2" style="border:1px solid #999;padding:6px 8px;">Thres_n</th>
      <th rowspan="2" style="border:1px solid #999;padding:6px 8px;">指标</th>
      <th colspan="2" style="border:1px solid #999;padding:6px 8px;">T0</th>
      <th colspan="2" style="border:1px solid #999;padding:6px 8px;">底仓</th>
      <th colspan="2" style="border:1px solid #999;padding:6px 8px;">产品</th>
    </tr>
    <tr>
      <th style="border:1px solid #999;padding:6px 8px;">调整前</th>
      <th style="border:1px solid #999;padding:6px 8px;">调整后</th>
      <th style="border:1px solid #999;padding:6px 8px;">调整前</th>
      <th style="border:1px solid #999;padding:6px 8px;">调整后</th>
      <th style="border:1px solid #999;padding:6px 8px;">调整前</th>
      <th style="border:1px solid #999;padding:6px 8px;">调整后</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #999;padding:6px 8px;">2</td><td style="border:1px solid #999;padding:6px 8px;">年化收益率</td><td style="border:1px solid #999;padding:6px 8px;">3.0764%</td><td style="border:1px solid #999;padding:6px 8px;">3.2423%</td><td style="border:1px solid #999;padding:6px 8px;">-5.3426%</td><td style="border:1px solid #999;padding:6px 8px;">-2.3595%</td><td style="border:1px solid #999;padding:6px 8px;">-2.2663%</td><td style="border:1px solid #999;padding:6px 8px;">0.8828%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">2</td><td style="border:1px solid #999;padding:6px 8px;">年化波动率</td><td style="border:1px solid #999;padding:6px 8px;">0.2180%</td><td style="border:1px solid #999;padding:6px 8px;">0.2341%</td><td style="border:1px solid #999;padding:6px 8px;">1.6161%</td><td style="border:1px solid #999;padding:6px 8px;">1.2964%</td><td style="border:1px solid #999;padding:6px 8px;">1.6550%</td><td style="border:1px solid #999;padding:6px 8px;">1.3403%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">2</td><td style="border:1px solid #999;padding:6px 8px;">夏普比率</td><td style="border:1px solid #999;padding:6px 8px;">14.1150</td><td style="border:1px solid #999;padding:6px 8px;">13.8520</td><td style="border:1px solid #999;padding:6px 8px;">-3.3059</td><td style="border:1px solid #999;padding:6px 8px;">-1.8200</td><td style="border:1px solid #999;padding:6px 8px;">-1.3693</td><td style="border:1px solid #999;padding:6px 8px;">0.6587</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">2</td><td style="border:1px solid #999;padding:6px 8px;">最大回撤</td><td style="border:1px solid #999;padding:6px 8px;">-0.0094%</td><td style="border:1px solid #999;padding:6px 8px;">-0.0095%</td><td style="border:1px solid #999;padding:6px 8px;">-1.1029%</td><td style="border:1px solid #999;padding:6px 8px;">-0.6462%</td><td style="border:1px solid #999;padding:6px 8px;">-0.8466%</td><td style="border:1px solid #999;padding:6px 8px;">-0.5369%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">5</td><td style="border:1px solid #999;padding:6px 8px;">年化收益率</td><td style="border:1px solid #999;padding:6px 8px;">3.0764%</td><td style="border:1px solid #999;padding:6px 8px;">4.2925%</td><td style="border:1px solid #999;padding:6px 8px;">-5.3426%</td><td style="border:1px solid #999;padding:6px 8px;">-2.6733%</td><td style="border:1px solid #999;padding:6px 8px;">-2.2663%</td><td style="border:1px solid #999;padding:6px 8px;">1.6191%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">5</td><td style="border:1px solid #999;padding:6px 8px;">年化波动率</td><td style="border:1px solid #999;padding:6px 8px;">0.2180%</td><td style="border:1px solid #999;padding:6px 8px;">0.3468%</td><td style="border:1px solid #999;padding:6px 8px;">1.6161%</td><td style="border:1px solid #999;padding:6px 8px;">3.0288%</td><td style="border:1px solid #999;padding:6px 8px;">1.6550%</td><td style="border:1px solid #999;padding:6px 8px;">2.9666%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">5</td><td style="border:1px solid #999;padding:6px 8px;">夏普比率</td><td style="border:1px solid #999;padding:6px 8px;">14.1150</td><td style="border:1px solid #999;padding:6px 8px;">12.3771</td><td style="border:1px solid #999;padding:6px 8px;">-3.3059</td><td style="border:1px solid #999;padding:6px 8px;">-0.8826</td><td style="border:1px solid #999;padding:6px 8px;">-1.3693</td><td style="border:1px solid #999;padding:6px 8px;">0.5458</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">5</td><td style="border:1px solid #999;padding:6px 8px;">最大回撤</td><td style="border:1px solid #999;padding:6px 8px;">-0.0094%</td><td style="border:1px solid #999;padding:6px 8px;">-0.0104%</td><td style="border:1px solid #999;padding:6px 8px;">-1.1029%</td><td style="border:1px solid #999;padding:6px 8px;">-1.0660%</td><td style="border:1px solid #999;padding:6px 8px;">-0.8466%</td><td style="border:1px solid #999;padding:6px 8px;">-0.7447%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">11</td><td style="border:1px solid #999;padding:6px 8px;">年化收益率</td><td style="border:1px solid #999;padding:6px 8px;">3.0764%</td><td style="border:1px solid #999;padding:6px 8px;">5.5171%</td><td style="border:1px solid #999;padding:6px 8px;">-5.3426%</td><td style="border:1px solid #999;padding:6px 8px;">-3.1691%</td><td style="border:1px solid #999;padding:6px 8px;">-2.2663%</td><td style="border:1px solid #999;padding:6px 8px;">2.3480%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">11</td><td style="border:1px solid #999;padding:6px 8px;">年化波动率</td><td style="border:1px solid #999;padding:6px 8px;">0.2180%</td><td style="border:1px solid #999;padding:6px 8px;">0.3966%</td><td style="border:1px solid #999;padding:6px 8px;">1.6161%</td><td style="border:1px solid #999;padding:6px 8px;">8.1870%</td><td style="border:1px solid #999;padding:6px 8px;">1.6550%</td><td style="border:1px solid #999;padding:6px 8px;">8.0950%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">11</td><td style="border:1px solid #999;padding:6px 8px;">夏普比率</td><td style="border:1px solid #999;padding:6px 8px;">14.1150</td><td style="border:1px solid #999;padding:6px 8px;">13.9114</td><td style="border:1px solid #999;padding:6px 8px;">-3.3059</td><td style="border:1px solid #999;padding:6px 8px;">-0.3871</td><td style="border:1px solid #999;padding:6px 8px;">-1.3693</td><td style="border:1px solid #999;padding:6px 8px;">0.2901</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">11</td><td style="border:1px solid #999;padding:6px 8px;">最大回撤</td><td style="border:1px solid #999;padding:6px 8px;">-0.0094%</td><td style="border:1px solid #999;padding:6px 8px;">-0.0122%</td><td style="border:1px solid #999;padding:6px 8px;">-1.1029%</td><td style="border:1px solid #999;padding:6px 8px;">-2.2716%</td><td style="border:1px solid #999;padding:6px 8px;">-0.8466%</td><td style="border:1px solid #999;padding:6px 8px;">-2.1504%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">19.5</td><td style="border:1px solid #999;padding:6px 8px;">年化收益率</td><td style="border:1px solid #999;padding:6px 8px;">3.0764%</td><td style="border:1px solid #999;padding:6px 8px;">6.1828%</td><td style="border:1px solid #999;padding:6px 8px;">-5.3426%</td><td style="border:1px solid #999;padding:6px 8px;">-4.3423%</td><td style="border:1px solid #999;padding:6px 8px;">-2.2663%</td><td style="border:1px solid #999;padding:6px 8px;">1.8405%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">19.5</td><td style="border:1px solid #999;padding:6px 8px;">年化波动率</td><td style="border:1px solid #999;padding:6px 8px;">0.2180%</td><td style="border:1px solid #999;padding:6px 8px;">0.4114%</td><td style="border:1px solid #999;padding:6px 8px;">1.6161%</td><td style="border:1px solid #999;padding:6px 8px;">8.6873%</td><td style="border:1px solid #999;padding:6px 8px;">1.6550%</td><td style="border:1px solid #999;padding:6px 8px;">8.5832%</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">19.5</td><td style="border:1px solid #999;padding:6px 8px;">夏普比率</td><td style="border:1px solid #999;padding:6px 8px;">14.1150</td><td style="border:1px solid #999;padding:6px 8px;">15.0276</td><td style="border:1px solid #999;padding:6px 8px;">-3.3059</td><td style="border:1px solid #999;padding:6px 8px;">-0.4998</td><td style="border:1px solid #999;padding:6px 8px;">-1.3693</td><td style="border:1px solid #999;padding:6px 8px;">0.2144</td></tr>
    <tr><td style="border:1px solid #999;padding:6px 8px;">19.5</td><td style="border:1px solid #999;padding:6px 8px;">最大回撤</td><td style="border:1px solid #999;padding:6px 8px;">-0.0094%</td><td style="border:1px solid #999;padding:6px 8px;">-0.0161%</td><td style="border:1px solid #999;padding:6px 8px;">-1.1029%</td><td style="border:1px solid #999;padding:6px 8px;">-2.2716%</td><td style="border:1px solid #999;padding:6px 8px;">-0.8466%</td><td style="border:1px solid #999;padding:6px 8px;">-2.1504%</td></tr>
  </tbody>
</table>
</div>



---

### **实习分析师**

**2023年11月 – 2024年3月 | 东吴证券研究所**

负责食品饮料行业（调味品&乳制品）数据的收集与整理，以及深度研究报告的撰写。

#### 具体贡献:

- 深度参与两家上市公司研究报告和调味品策略报告的撰写，具体工作内容包括数据整理与图表绘制、数据分析与报告撰写、合规底稿的制作与整理。按时按规完成三篇研究报告中负责部分的撰写和修改，撰写内容20000字+。
- 借助Wind、iFinD、欧睿等平台，搜集整理公司数据，包括:内部控制、财务数据、业务规划（产品渠道），绘制关键图表(Excel、PPT)，分析公司发展变动情况；参与上市公司交流会议，记录会议关键信息，如企业盈利预期、渠道扩张以及品牌建设规划。
