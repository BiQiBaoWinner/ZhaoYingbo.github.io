<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
金斧子基金销售有限公司  |  星荣事业群  -  量化策略实习生  |  2026.1 - 2026.3
</div>
独立完成A股高频微观结构日频因子研究，围绕盘口供给、价格推动、流动性摩擦、开盘定价效率与交易集中度构建 50+ 因子框架，形成Minute_logvol_skew、Minute_MPC5_max_v2、tick_LS_99、tick_VD15m等多条稳定alph主线，着重关注因子的金融学逻辑以及对隔日的截面Alpha捕捉能力。完善因子检验框架，补充“因子风格分解模块”+“FamaMacBeth增量Alpha检验模块”。

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/jfz/Minute_logvol_skew_groups_5_20260228_175346.png" alt="Minute_logvol_skew" style="width:40%; display:inline-block;">
  <img src="/zhaoyingbo.github.io/static/assets/img/jfz/Minute_MPC5_max_v2_groups_5_20260126_111944.png" alt="Minute_MPC5_max_v2" style="width:40%; display:inline-block;">

</div>

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/jfz/tick_LS_99_groups_5_20260212_134322.png" alt="LS_99" style="width:40%; display:inline-block;">
  <img src="/zhaoyingbo.github.io/static/assets/img/jfz/tick_VD15m_groups_5_20260319_135954.png" alt="tick_VD15m" style="width:40%; display:inline-block;">
</div>

#### 工作内容：

- 围绕A股L1行情数据，搭建了覆盖订单簿、成交行为、价格发现、流动性摩擦与隔夜反馈的高频因子研究框架。
- 研究重系统实现并迭代了 50+ 个候选因子，通过统一的回测、相似因子分析和中性化筛选出多条稳健主线：
  - Minute_logvol_skew用成交量分布不对称捕捉拥挤交易后的价格修正
  - Minute_MPC5_max_v2刻画收盘附近被成交量确认的价格推动
  - tick_LS_99刻画极端流动性摩擦
  - tick_VD15m刻画开盘定价效率偏离，均表现出较强的多空净值单调性与可交易性

---

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
燧石资产管理有限公司  |  投研组  -  量化策略实习生  |  2025.7 – 2025.9 
</div>
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

#### 工作内容:

- 独立设计并迭代开发基于**订单簿微观结构的Alpha因子**，通过刻画买卖双方在主动成交与高档位挂单中的不对称压力，构建具有前瞻性的多空信号；
- 因子在**创业板样本**内回测 (2024.07–2025.07) 实现**年化收益率 2.33\%**、**夏普比率 2.41**，且与现有因子库相关性低于 0.7，具备显著增量信息。
- 基于手工T0交易员提供的加/减仓票池 (Pool1/Pool2)，设计并实现“**市值权重降序减仓**”调仓逻辑，在控制跟踪误差 (TE ≈ 0.0028) 前提下，将产品**年化收益率由 3.08\% 提升至 4.63\%**(加仓4倍)；进一步测算极限调仓场景，验证在风险可控范围内可实现 6.18\% 年化收益，为产品达标6\%收益目标提供量化支撑。

<!-- ===== 策略回测表格开始 ===== -->

<div style="width:100%;overflow-x:auto;margin:25px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
<table style="border-collapse:collapse;font-size:0.8em;min-width:900px;width:100%;box-shadow:0 2px 8px rgba(0,0,0,0.08);border-radius:6px;overflow:hidden;background:#fff">
<thead>
<tr style="background:linear-gradient(135deg,#1976d2,#42a5f5);color:#fff;text-align:center">
<th rowspan="2" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0;width:90px">Thres_n</th>
<th rowspan="2" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0">指标</th>
<th colspan="2" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0;font-weight:600">T0</th>
<th colspan="2" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0;font-weight:600">底仓</th>
<th colspan="2" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0;font-weight:600">产品</th>
</tr>
<tr style="background:linear-gradient(135deg,#1976d2,#42a5f5);color:#fff">
<th style="padding:8px 12px;border:1px solid #e0e0e0">调整前</th><th style="padding:8px 12px;border:1px solid #e0e0e0">调整后</th>
<th style="padding:8px 12px;border:1px solid #e0e0e0">调整前</th><th style="padding:8px 12px;border:1px solid #e0e0e0">调整后</th>
<th style="padding:8px 12px;border:1px solid #e0e0e0">调整前</th><th style="padding:8px 12px;border:1px solid #e0e0e0">调整后</th>
</tr>
</thead>
<tbody>
<tr style="background:#fff"><td rowspan="4" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0;vertical-align:middle;background:#f8f9fa;font-weight:600;color:#555">thres_n = 2</td><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">年化收益率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">3.0764%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">3.2423%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-5.3426%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.3595%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.2663%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.8828%</td></tr>
<tr style="background:#f8f9fa"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">年化波动率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.2180%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.2341%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6161%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.2964%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6550%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.3403%</td></tr>
<tr style="background:#fff"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">夏普比率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">14.1150</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">13.8520</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-3.3059</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.8200</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.3693</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.6587</td></tr>
<tr style="background:#f8f9fa"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">最大回撤</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.0094%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.0095%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.1029%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.6462%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.8466%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.5369%</td></tr>
<tr style="background:#fff"><td rowspan="4" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0;vertical-align:middle;background:#f8f9fa;font-weight:600;color:#555">thres_n = 5</td><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">年化收益率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">3.0764%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">4.2925%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-5.3426%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.6733%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.2663%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6191%</td></tr>
<tr style="background:#f8f9fa"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">年化波动率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.2180%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.3468%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6161%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">3.0288%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6550%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">2.9666%</td></tr>
<tr style="background:#fff"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">夏普比率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">14.1150</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">12.3771</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-3.3059</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.8826</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.3693</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.5458</td></tr>
<tr style="background:#f8f9fa"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">最大回撤</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.0094%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.0104%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.1029%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.0660%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.8466%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.7447%</td></tr>
<tr style="background:#fff"><td rowspan="4" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0;vertical-align:middle;background:#f8f9fa;font-weight:600;color:#555">thres_n = 11</td><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">年化收益率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">3.0764%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums;color:#d63031">5.5171%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-5.3426%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-3.1691%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.2663%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">2.3480%</td></tr>
<tr style="background:#f8f9fa"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">年化波动率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.2180%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.3966%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6161%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums;color:#d63031">8.1870%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6550%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums;color:#d63031">8.0950%</td></tr>
<tr style="background:#fff"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">夏普比率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">14.1150</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">13.9114</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-3.3059</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.3871</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.3693</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.2901</td></tr>
<tr style="background:#f8f9fa"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">最大回撤</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.0094%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.0122%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.1029%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.2716%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.8466%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.1504%</td></tr>
<tr style="background:#fff"><td rowspan="4" style="text-align:center;padding:10px 12px;border:1px solid #e0e0e0;vertical-align:middle;background:#f8f9fa;font-weight:600;color:#555">thres_n = 19.5</td><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">年化收益率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">3.0764%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums;color:#d63031">6.1828%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-5.3426%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-4.3423%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.2663%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.8405%</td></tr>
<tr style="background:#f8f9fa"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">年化波动率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.2180%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.4114%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6161%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums;color:#d63031">8.6873%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">1.6550%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums;color:#d63031">8.5832%</td></tr>
<tr style="background:#fff"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">夏普比率</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">14.1150</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">15.0276</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-3.3059</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.4998</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.3693</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">0.2144</td></tr>
<tr style="background:#f8f9fa"><td style="text-align:center;padding:8px 12px;border:1px solid #e0e0e0;color:#666">最大回撤</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.0094%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.0161%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-1.1029%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.2716%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-0.8466%</td><td style="text-align:right;padding:8px 12px;border:1px solid #e0e0e0;font-variant-numeric:tabular-nums">-2.1504%</td></tr>
</tbody>
</table>
</div>
<!-- ===== 策略回测表格结束 ===== -->

---

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
东吴证券股份有限公司 | 研究所食饮组  -  实习分析师  |  2023.11 – 2024.3
</div>
负责食品饮料行业（调味品&乳制品）数据的收集与整理，以及深度研究报告的撰写。

#### 工作内容:

- 深度参与两家上市公司研究报告和调味品策略报告的撰写，具体工作内容包括数据整理与图表绘制、数据分析与报告撰写、合规底稿的制作与整理。按时按规完成三篇研究报告中负责部分的撰写和修改，撰写内容20000字+。
- 借助Wind、iFinD、欧睿等平台，搜集整理公司数据，包括:内部控制、财务数据、业务规划（产品渠道），绘制关键图表(Excel、PPT)，分析公司发展变动情况；参与上市公司交流会议，记录会议关键信息，如企业盈利预期、渠道扩张以及品牌建设规划。
