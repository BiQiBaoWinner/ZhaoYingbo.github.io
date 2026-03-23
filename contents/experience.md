### **量化策略实习生**

**2026.1 - 2026.3 | 金斧子基金销售有限公司 | 星荣事业群**

负责使用L1行情数据进行日频因子挖掘与检验，着重关注因子的金融学逻辑以及对隔日的截面Alpha捕捉能力。完善因子检验框架，补充“因子风格分解模块”+“FamaMacBeth增量Alpha检验模块”。

### **量化策略实习生**

**2025.7 – 2025.9 | 燧石资产管理有限公司 | 投研组**

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

<!-- ===== 策略回测表格开始 ===== -->
<div style="width:100%; overflow-x:auto; margin: 25px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <style>
    .qt-table-wrap { overflow-x: auto; }
    .qt-table {
      border-collapse: collapse;
      font-size: 0.82em;
      min-width: 850px;
      width: 100%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      border-radius: 6px;
      overflow: hidden;
      background: #fff;
    }
    .qt-table thead tr {
      background: linear-gradient(135deg, #009879, #00b894);
      color: #fff;
      text-align: center;
    }
    .qt-table th,
    .qt-table td {
      padding: 9px 12px;
      border: 1px solid #e0e0e0;
      line-height: 1.4;
    }
    .qt-table tbody tr:nth-of-type(even) { background-color: #f8f9fa; }
    .qt-table tbody tr:hover { background-color: #e8f5f2; transition: 0.2s; }
    .qt-num { text-align: right; font-variant-numeric: tabular-nums; }
    .qt-center { text-align: center; }
    .qt-header-main { font-weight: 600; }
  </style>
  
  <div class="qt-table-wrap">
    <table class="qt-table">
      <thead>
        <tr>
          <th rowspan="2" class="qt-center">Thres_n</th>
          <th rowspan="2" class="qt-center">指标</th>
          <th colspan="2" class="qt-header-main">T0</th>
          <th colspan="2" class="qt-header-main">底仓</th>
          <th colspan="2" class="qt-header-main">产品</th>
        </tr>
        <tr>
          <th>调整前</th><th>调整后</th>
          <th>调整前</th><th>调整后</th>
          <th>调整前</th><th>调整后</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="qt-center">2</td><td class="qt-center">年化收益率</td><td class="qt-num">3.08%</td><td class="qt-num">3.24%</td><td class="qt-num">-5.34%</td><td class="qt-num">-2.36%</td><td class="qt-num">-2.27%</td><td class="qt-num">0.88%</td></tr>
        <tr><td class="qt-center">2</td><td class="qt-center">年化波动率</td><td class="qt-num">0.22%</td><td class="qt-num">0.23%</td><td class="qt-num">1.62%</td><td class="qt-num">1.30%</td><td class="qt-num">1.66%</td><td class="qt-num">1.34%</td></tr>
        <tr><td class="qt-center">2</td><td class="qt-center">夏普比率</td><td class="qt-num">14.12</td><td class="qt-num">13.85</td><td class="qt-num">-3.31</td><td class="qt-num">-1.82</td><td class="qt-num">-1.37</td><td class="qt-num">0.66</td></tr>
        <tr><td class="qt-center">2</td><td class="qt-center">最大回撤</td><td class="qt-num">-0.01%</td><td class="qt-num">-0.01%</td><td class="qt-num">-1.10%</td><td class="qt-num">-0.65%</td><td class="qt-num">-0.85%</td><td class="qt-num">-0.54%</td></tr>
        <tr><td class="qt-center">5</td><td class="qt-center">年化收益率</td><td class="qt-num">3.08%</td><td class="qt-num">4.29%</td><td class="qt-num">-5.34%</td><td class="qt-num">-2.67%</td><td class="qt-num">-2.27%</td><td class="qt-num">1.62%</td></tr>
        <tr><td class="qt-center">5</td><td class="qt-center">年化波动率</td><td class="qt-num">0.22%</td><td class="qt-num">0.35%</td><td class="qt-num">1.62%</td><td class="qt-num">3.03%</td><td class="qt-num">1.66%</td><td class="qt-num">2.97%</td></tr>
        <tr><td class="qt-center">5</td><td class="qt-center">夏普比率</td><td class="qt-num">14.12</td><td class="qt-num">12.38</td><td class="qt-num">-3.31</td><td class="qt-num">-0.88</td><td class="qt-num">-1.37</td><td class="qt-num">0.55</td></tr>
        <tr><td class="qt-center">5</td><td class="qt-center">最大回撤</td><td class="qt-num">-0.01%</td><td class="qt-num">-0.01%</td><td class="qt-num">-1.10%</td><td class="qt-num">-1.07%</td><td class="qt-num">-0.85%</td><td class="qt-num">-0.74%</td></tr>
        <tr><td class="qt-center">11</td><td class="qt-center">年化收益率</td><td class="qt-num">3.08%</td><td class="qt-num">5.52%</td><td class="qt-num">-5.34%</td><td class="qt-num">-3.17%</td><td class="qt-num">-2.27%</td><td class="qt-num">2.35%</td></tr>
        <tr><td class="qt-center">11</td><td class="qt-center">年化波动率</td><td class="qt-num">0.22%</td><td class="qt-num">0.40%</td><td class="qt-num">1.62%</td><td class="qt-num">8.19%</td><td class="qt-num">1.66%</td><td class="qt-num">8.10%</td></tr>
        <tr><td class="qt-center">11</td><td class="qt-center">夏普比率</td><td class="qt-num">14.12</td><td class="qt-num">13.91</td><td class="qt-num">-3.31</td><td class="qt-num">-0.39</td><td class="qt-num">-1.37</td><td class="qt-num">0.29</td></tr>
        <tr><td class="qt-center">11</td><td class="qt-center">最大回撤</td><td class="qt-num">-0.01%</td><td class="qt-num">-0.01%</td><td class="qt-num">-1.10%</td><td class="qt-num">-2.27%</td><td class="qt-num">-0.85%</td><td class="qt-num">-2.15%</td></tr>
        <tr><td class="qt-center">19.5</td><td class="qt-center">年化收益率</td><td class="qt-num">3.08%</td><td class="qt-num">6.18%</td><td class="qt-num">-5.34%</td><td class="qt-num">-4.34%</td><td class="qt-num">-2.27%</td><td class="qt-num">1.84%</td></tr>
        <tr><td class="qt-center">19.5</td><td class="qt-center">年化波动率</td><td class="qt-num">0.22%</td><td class="qt-num">0.41%</td><td class="qt-num">1.62%</td><td class="qt-num">8.69%</td><td class="qt-num">1.66%</td><td class="qt-num">8.58%</td></tr>
        <tr><td class="qt-center">19.5</td><td class="qt-center">夏普比率</td><td class="qt-num">14.12</td><td class="qt-num">15.03</td><td class="qt-num">-3.31</td><td class="qt-num">-0.50</td><td class="qt-num">-1.37</td><td class="qt-num">0.21</td></tr>
        <tr><td class="qt-center">19.5</td><td class="qt-center">最大回撤</td><td class="qt-num">-0.02%</td><td class="qt-num">-0.02%</td><td class="qt-num">-1.10%</td><td class="qt-num">-2.27%</td><td class="qt-num">-0.85%</td><td class="qt-num">-2.15%</td></tr>
      </tbody>
    </table>
  </div>
</div>
<!-- ===== 策略回测表格结束 ===== -->
---

### **实习分析师**

**2023年11月 – 2024年3月 | 东吴证券股份有限公司 | 研究所食饮组**

负责食品饮料行业（调味品&乳制品）数据的收集与整理，以及深度研究报告的撰写。

#### 具体贡献:

- 深度参与两家上市公司研究报告和调味品策略报告的撰写，具体工作内容包括数据整理与图表绘制、数据分析与报告撰写、合规底稿的制作与整理。按时按规完成三篇研究报告中负责部分的撰写和修改，撰写内容20000字+。
- 借助Wind、iFinD、欧睿等平台，搜集整理公司数据，包括:内部控制、财务数据、业务规划（产品渠道），绘制关键图表(Excel、PPT)，分析公司发展变动情况；参与上市公司交流会议，记录会议关键信息，如企业盈利预期、渠道扩张以及品牌建设规划。
