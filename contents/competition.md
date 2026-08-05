<div class="competition-nav">
  <a href="#comp-2025"><span class="nav-year">2025</span><span class="nav-title">第一届"良文杯"统计建模与AI预测挑战赛</span></a>
  <a href="#comp-2023"><span class="nav-year">2023</span><span class="nav-title">四川省金融科技建模大赛</span></a>
  <a href="#comp-2022-mcm"><span class="nav-year">2022</span><span class="nav-title">MCM/ICM 森林碳汇管理决策模型</span></a>
  <a href="#comp-2022-mathor"><span class="nav-year">2022</span><span class="nav-title">MathorCup 5G基站站址优化</span></a>
  <a href="#comp-2022-apmcm"><span class="nav-year">2022</span><span class="nav-title">APMCM 全球气温预测建模</span></a>
  <a href="#comp-2022-inn"><span class="nav-year">2022</span><span class="nav-title">大创：NLP投资者情绪与股利政策</span></a>
</div>

<div id="comp-2025" class="competition-anchor"></div>
<div>
2025 <br> 
第一届"良文杯"统计建模与AI预测挑战赛（金融大数据主题）
</div>

* 主导构建基于 LGBM 的多因子预测模型，用于精准预测 5 只标的在未来 5/10/20/40/60 个 tick 后的涨跌情况。
* 核心技术与成果：设计并实现了包含价差与深度、挂单分布以及不平衡性在内的 65 个特征，IC 最高达到 9.95%，经过 ICIR 及相关性筛选后得到 40 个入模因子。采用 LightGBM 作为学习器，通过动态选择最优样本外阈值，显著提升了模型在不同预测周期下的泛化能力。模型在 5/10/20/40/60 ticks 样本外累计收益分别达到 42.26% / 51.65% / 44.27% / 27.98% / 23.51%。

<div>
  <img src="static/assets/img/lwcup.png" alt="LWCUP">
</div>

<div id="comp-2023" class="competition-anchor"></div>
<div>
2023 <br>
四川省大学生金融科技建模大赛
</div>

* 构建以业务价值为导向的三分类模型。基于脱敏用户画像与行为数据，以用户价值加权的 WAUC 为优化目标，精准识别高粘性客户（高频复购）。
* 由数据清洗（缺失填补、低方差过滤）到特征工程（KMeans 聚类衍生、WOE 分箱），再到变量筛选（XGBoost + IV），最后进行多模型训练（XGBoost / LightGBM / CatBoost），完成端到端建模流程。单模型 WAUC 达 0.5788（LGBM），Stacking 融合后提升至 0.5799，显著优于基线。

<div>
  <img src="static/assets/img/fintech.png" alt="金融科技">
</div>

注：AX/BX/CX 为新网银行提供的客户脱敏数据，'_Max'/'_Range'/'_mul'/'_Mode' 为特征工程中所使用的操作符。

<div id="comp-2022-mcm" class="competition-anchor"></div>
<div>
2022 <br>
美国大学生数学建模竞赛（MCM/ICM）— Honorable Mention <br>
《Decision-making model for forest management plans based on PCA and Multiple Regression Analysis》
</div>

本论文围绕全球气候变化背景下的森林碳汇管理问题展开研究，建立了两阶段的森林管理决策模型。

* **Integrated Model I（碳汇估算模型）**：随机抽样全球四种温度带的 14 种优势树种，基于生物量膨胀因子法（BEF）间接计算各树种的碳储量。对林木碳汇和四种主要林产品（2011–2020 全球产量）分别进行主成分分析（PCA），各提取 2 个主成分，再通过多元回归分析构建综合碳汇预测模型，用于计算不同地区森林的碳储量。

* **Integrated Model II（管理决策模型）**：在 Model I 基础上引入人口变量和旅游发展水平，修正得到可用于森林最优管理决策的综合模型。模型揭示了森林采伐对碳固存的贡献存在"转折点"——特定条件下采伐成熟林木加工为木制品可实现更大碳固存。

* **模型表现**：最终回归模型 **R² = 0.8031**，验证了强大的解释力。此外发现偏导数在特定森林数据下显著非零，表明存在使碳储量保持正增长而不进行采伐的条件。

关键碳汇公式：
$$
CS_t = CS_{\text{trees}} + CS_{\text{forestry-products}} = (1 - \lambda)^t \sum_{i=1}^2 \Phi_i X_i + (1 + \mu)^t \sum_{i=1}^2 \varphi_i Y_i
$$

  * $X_1$、$X_2$：PCA 提取的林木碳汇主成分，公式如下：

$$
X_1 = \sum_{j=1}^{14} b_{j1} \cdot CS_j, \quad X_2 = \sum_{j=1}^{14} b_{j2} \cdot CS_j
$$

  * $Y_1$、$Y_2$：林产品碳汇主成分，公式如下：

$$
Y_1 = \sum_{k=1}^{4} c_{k1} \cdot Quantity_k, \quad Y_2 = \sum_{k=1}^{4} c_{k2} \cdot Quantity_k
$$

<div id="comp-2022-mathor" class="competition-anchor"></div>
<div>
2022 <br>
MathorCup 数学建模竞赛 — 二等奖 <br>
《基于 K-Means 聚类分析的 5G 基站站址及类型选择优化模型》
</div>

针对 5G 通信网络规划中的基站选址问题，建立站址及种类选择优化模型，在满足 90% 弱覆盖点覆盖率要求的前提下，实现成本最优的基站部署方案。问题空间为 2500×2500 的网格，共 22 个基站点位候选。

- **K-Means 聚类**：将弱覆盖区域划分为 5 个片区，实现分批治理
- **层次分析法（AHP）**：对各片区业务量权重进行一致性检验
- **递归选址算法**：优先选择业务量最大点位建站，逐步清点已覆盖区域，每次新增站点时重新规划
- **类扇形覆盖修正**：引入旋转角度 β 优化三扇区实际覆盖范围
- **聚类方法对比**：系统聚类、K-Means、DBSCAN 的多维指标全面评估

  <table>
<thead>
<tr>
      <th>公式名称</th>
      <th>表达式</th>
    </tr>
</thead>
<tbody><tr>
      <td>辐射范围半径（随偏离角度衰减）</td>
      <td>$\displaystyle r(\alpha) = -\frac{3r}{2\pi}\alpha + r$</td>
    </tr>
    <tr>
      <td>基站类型选择参数</td>
      <td>$\displaystyle \eta = \frac{traffic(X^m)}{traffic(X^M)}$</td>
    </tr>
    <tr>
      <td>最优旋转角度</td>
      <td>$\displaystyle \beta^{*} = \arg\max_{\beta_n} \{ traffic(\mathcal{R}_j^i, \beta_n) \}$</td>
    </tr>
</tbody>
</table>

注：$\mathcal{C}_j^i$ 表示以 $Q_j^i$ 为圆心的圆形辐射区域，$\mathcal{R}_j^i$ 表示修正后的三扇区覆盖区域。

<div class="competition-tables">
  <div class="competition-table">
    <div class="competition-table-title">主要结果</div>
    <table>
<thead>
<tr>
        <th>成果指标</th>
        <th>数值</th>
      </tr>
</thead>
<tbody><tr>
        <td>弱覆盖点业务量覆盖率（圆形覆盖）</td>
        <td><strong>92.88%</strong></td>
      </tr>
      <tr>
        <td>弱覆盖点业务量覆盖率（三扇区修正）</td>
        <td><strong>75.26%</strong></td>
      </tr>
      <tr>
        <td>模型稳定性检验覆盖率范围</td>
        <td>89% – 93%</td>
      </tr>
</tbody>
</table>
  </div>

  <div class="competition-table">
    <div class="competition-table-title">聚类方法对比</div>
    <table>
<thead>
<tr>
        <th>评价指标</th>
        <th>系统聚类</th>
        <th>K-Means</th>
        <th>DBSCAN</th>
      </tr>
</thead>
<tbody><tr>
        <td>紧密度 (Compactness)</td>
        <td>0.52</td>
        <td>0.34</td>
        <td>0.29</td>
      </tr>
      <tr>
        <td>分割度 (Separation)</td>
        <td>0.55</td>
        <td><strong>0.85</strong></td>
        <td>0.82</td>
      </tr>
      <tr>
        <td>戴维森堡丁指数 (DBI)</td>
        <td>0.67</td>
        <td><strong>0.23</strong></td>
        <td>0.44</td>
      </tr>
      <tr>
        <td>邓恩指数 (Dunn Index)</td>
        <td>0.23</td>
        <td><strong>0.91</strong></td>
        <td>0.78</td>
      </tr>
</tbody>
</table>
  </div>
</div>

<div id="comp-2022-apmcm" class="competition-anchor"></div>
<div>
2022 <br>
APMCM 亚太大学生数学建模竞赛 — 二等奖 <br>
Global Temperature Prediction and Analysis
</div>

本论文针对全球变暖问题构建了三种时间序列预测模型，并使用虚拟变量回归分析气温与自然及社会因素的关系。数据选取 1990–2020 年全球面板数据。

- **多元线性回归 (MLR)**：引入化石能源消费量、全球 GDP、总人口、森林覆盖面积四个自变量
- **XGBOOST**：非线性集成树模型，通过正则化参数（lambda, alpha）控制过拟合
- **ARIMA**：基于 BIC 矩阵和 ACF/PACF 图确定参数 (p, q)，捕捉长期趋势与周期性
- **虚拟变量回归**：量化工业革命、气候带、经济发展水平以及自然灾害的影响

* 自然灾害响应分析（引入火山爆发次数、森林火灾次数、肺炎疫情虚拟变量）

$$
Tem_{t}^{g} = \xi_{0} + \xi_{1} \cdot VolcanicEruption_{t} + \xi_{2} \cdot ForestFire_{t} + \xi_{3} \cdot Pneumonia_{t} + \epsilon_t
$$

* 模型评估与未来预测

  <table>
<thead>
<tr>
      <th>模型</th>
      <th>MSE</th>
      <th>MAPE</th>
      <th>2050年预测</th>
      <th>2100年预测</th>
    </tr>
</thead>
<tbody><tr>
      <td>MLR</td>
      <td>0.043</td>
      <td>0.039</td>
      <td>18.97°C</td>
      <td>25.56°C</td>
    </tr>
    <tr>
      <td><strong>XGBOOST</strong></td>
      <td><strong>$3.305 \times 10^{-4}$</strong></td>
      <td><strong>$1.081 \times 10^{-3}$</strong></td>
      <td><strong>20.63°C</strong></td>
      <td><strong>20.69°C</strong></td>
    </tr>
    <tr>
      <td>ARIMA</td>
      <td>—</td>
      <td>—</td>
      <td>17.44°C</td>
      <td>24.24°C</td>
    </tr>
</tbody>
</table>

XGBOOST 在三个模型中表现最优（MSE 和 MAPE 最低），预测 2050 年全球气温达到 20.63°C，突破 20°C 阈值。MLR 因扰动项存在自相关性、拟合不足而未被采纳；ARIMA 虽时间序列描述能力强，但在此数据集上过于保守。分析进一步发现化石能源消费、GDP、人口与气温显著正相关，森林覆盖与之负相关；全球温度年均值呈持续上升趋势，且季均温度具有季节性波动特征。

<div id="comp-2022-inn" class="competition-anchor"></div>
<div>
2022 <br>
大学生创新创业训练计划 — 省级立项 <br>
《投资者情绪与股利分配政策关系研究——基于 NLP 理论的机器学习方法》
</div>

* 研究上市公司投资者情绪与股利分配政策的相关性，并通过调研问卷法补充考察非上市公司决策者对投资者情绪的反应。
* 负责借助 Python 的文本分析能力构造投资者情绪指数，最终构建多元回归模型。

  <table>
<thead>
<tr>
      <th>公式名称</th>
      <th>表达式</th>
    </tr>
</thead>
<tbody><tr>
      <td>Lintner 股利模型</td>
      <td>$m = DIV_1 - DIV_0 = s \cdot (r \cdot EPS_1 - DIV_0)$</td>
    </tr>
    <tr>
      <td>主题权重计算</td>
      <td>$W_i = \frac{L_i \text{ 的主题包含的评论数量}}{\text{评论总数量}}$</td>
    </tr>
    <tr>
      <td>看涨指标</td>
      <td>$B_{ts} = \frac{\sum W_i L_i^{pos} - \sum W_i L_i^{neg}}{\sum W_i L_i^{pos} + \sum W_i L_i^{neg}}$</td>
    </tr>
    <tr>
      <td>投资者情绪指数 (TSI)</td>
      <td>$TSI = B_{ts} \cdot \ln(1 + M^{pos} + M^{neg} + M^{neu})$</td>
    </tr>
    <tr>
      <td>多元回归模型</td>
      <td>$r = a_0 + a_1 InSent + a_2 Size + a_3 Lev + a_4 ROE + a_5 Growth + a_6 BM + a_7 SOE + a_8 Top + a_9 Balance + \epsilon$</td>
    </tr>
    <tr>
      <td>指数移动平均 (EMA)</td>
      <td>$EMA_N(x_n) = \frac{2}{N+1} \sum_{k=0}^{\infty} \left(\frac{N-1}{N+1}\right)^k x_{n-k}$</td>
    </tr>
</tbody>
</table>
