<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2025 <br> 
第一届"良文杯"统计建模与AI预测挑战赛（金融大数据主题）
</div>

* 主导构建基于LGBM 的多因子预测模型，用于精准预测5 只标的在未来5 / 10 / 20 / 40 / 60个tick后的涨跌情况。
* 核心技术与成果：设计并实现了包含价差与深度、挂单分布以及不平衡性在内的65个特征，IC最高达到9.95%，经过ICIR及相关性筛选后得到40个入模因子。采用LightGBM作为学习器，通过动态选择最优样本外阈值，显著提升了模型在不同预测周期下的泛化能力。模型在5 / 10 / 20 / 40 / 60 ticks样本外累计收益分别达到42.26% / 51.65% / 44.27% / 27.98% / 23.51%。

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/lwcup.png" alt="LWCUP" style="width:80%; display:inline-block;">
</div>

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2023 <br>
四川省大学生金融科技建模大赛
</div>

* 构建以业务价值为导向的三分类模型。基于脱敏用户画像与行为数据，以用户价值加权的WAUC 为优化目标，精准识别高粘性客户（高频复购）。
* 由数据清洗（缺失填补、低方差过滤）到特征工程（KMeans 聚类衍生、WOE 分箱），再到变量筛选（XGBoost + IV），最后进行多模型训练（XGBoost/LightGBM/CatBoost），完成端到端建模流程。单模型WAUC 达0.5788（LGBM），Stacking 融合后提升至0.5799，显著优于基线。

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/fintech.png" alt="金融科技" style="width:80%; display:inline-block;">
</div>

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
美国大学生数学建模竞赛（MCM/ICM）<br>
《Decision-making model for forest management plans based on Principal Component Analysis and MultipleRegression Analysis》
</div>

* **主导构建“森林碳汇与管理决策”综合模型**，从全球气候变化背景出发，将复杂的生态、经济与社会因素（如树种生物量、林产品产量、人口及旅游发展）进行量化整合。
* 整理相关文献，根据生物量膨胀系数法计算得到树种的生物量和碳储量，以此借助PCA算法对14种主要树种的碳储量数据进行降维，建立综合指标对碳储量进行代理后进行多元回归分析，成功构建了一个能预测碳储量并指导最优管理决策的模型，最终模型R²高达0.8031，验证了其强大的解释力；除此之外，在修正模型中还考虑到了人口特征以及旅游发展特征。
* 团队角色：核心建模成员，负责模型框架设计、算法实现与论文撰写。

  * 碳汇公式如下：

$$
CS_t = CS_{\text{trees}} + CS_{\text{forestry-products}} = (1 - \lambda)^t \sum_{i=1}^2 \Phi_i X_i + (1 + \mu)^t \sum_{i=1}^2 \varphi_i Y_i
$$
其中：
$$
\begin{cases} X_1 = \sum_{j=1}^{14} b_{j1} CS_j \\[2ex] X_2 = \sum_{j=1}^{14} b_{j2} CS_j \end{cases}
\text{\qquad}
\begin{cases} Y_1 = \sum_{k=1}^{4} c_{k1} \text{Quantity}_k \\[2ex] Y_2 = \sum_{k=1}^{4} c_{k2} \text{Quantity}_k \end{cases}
$$

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
MathorCup 数学建模竞赛 <br>
《基于K-Means聚类分析的基站站址及类型选择优化模型》
</div>

在本项目中，我们针对5G通信网络规划中的基站选址问题，建立站址及种类选择优化模型，在满足覆盖率要求的前提下，实现成本最优的基站部署方案。

- **K-Means聚类**：将弱覆盖区域划分为5个片区，实现分批治理
- **层次分析法（AHP）**：对各片区业务权重进行一致性检验
- **递归选址算法**：优先选择业务量最大点建站，逐步清点已覆盖区域
- **类扇形覆盖修正**：引入旋转角度 β 优化三扇区实际覆盖范围
- **聚类方法对比**：系统聚类、DBSCAN、K-Means 多维指标评估

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #fff;">
    <tr style="background: #f5f5f5;">
      <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">公式</th>
      <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">表达式</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">辐射范围半径（随偏离角度衰减）</td>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$\displaystyle r(\alpha) = -\frac{3r}{2\pi}\alpha + r$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">基站类型选择参数</td>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$\displaystyle \eta = \frac{traffic(X^m)}{traffic(X^M)}$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">基站类型选择函数</td>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$\displaystyle \phi = \frac{\Delta\gamma}{\gamma(X^m)} - \eta$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">辐射圈业务量计算</td>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$\displaystyle traffic(\mathcal{C}_j^i) = \sum_{(x-x_j^i)^2+(y-y_j^i)^2 \leq r^2} traffic(x,y)$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">最优旋转角度</td>
      <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$\displaystyle \beta^{*} = \arg\max_{\beta_n} \{ traffic(\mathcal{R}_j^i, \beta_n) \}$</td>
    </tr>
  </table>d
  > 注：$\mathcal{C}_j^i$ 表示以 $Q_j^i$ 为圆心的圆形辐射区域，$\mathcal{R}_j^i$ 表示修正后的三扇区覆盖区域。

* 主要结果:

  | 成果指标                 | 数值             |
  | ------------------------ | ---------------- |
  | 弱覆盖点业务量覆盖率     | **92.88%** |
  | 最优旋转角度覆盖率       | **75.26%** |
  | 模型稳定性检验覆盖率范围 | 89%–93%         |

* 聚类方法对比:

  | 评价指标       | 系统聚类 | K-Means        | DBSCAN |
  | -------------- | -------- | -------------- | ------ |
  | 紧密度         | 0.52     | 0.34           | 0.29   |
  | 分割度         | 0.55     | **0.85** | 0.82   |
  | 戴维森堡丁指数 | 0.67     | **0.23** | 0.44   |
  | 邓恩指数       | 0.23     | **0.91** | 0.78   |

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
APMCM 亚太大学生数学建模竞赛 <br>
</div>

在本项目中，我们构建了多种时间序列与回归模型，分析全球气温变化趋势，并预测未来关键时间节点的温度变化。

- **多元线性回归**：引入 GDP、人口、化石能源、森林覆盖率四因子
- **XGBOOST**：非线性集成树模型，通过正则化控制过拟合
- **ARIMA**：时间序列分析，捕捉长期趋势与周期性波动
- **虚拟变量回归**：量化工业革命、气候带、自然灾害的影响

* *关键公式-自然灾害响应分析（引入火山爆发次数、森林火灾次数、肺炎疫情虚拟变量）

$$
Tem_{t}^{g} = \xi_{0} + \xi_{1} \cdot VolcanicEruption_{t} + \xi_{2} \cdot ForestFire_{t} + \xi_{3} \cdot Pneumonia_{t} + \epsilon_t
$$

* 模型评估与预测

* 采用 MSE 和 MAPE 作为模型评价指标，比较三种模型在历史数据拟合与未来预测中的表现：

  | 模型    | MSE           | MAPE          | 2050年预测 | 2100年预测 |
  | ------- | ------------- | ------------- | ---------- | ---------- |
  | MLR     | 0.043         | 0.039         | 18.97°C   | 25.56°C   |
  | XGBOOST | 3.305×10⁻⁴ | 1.081×10⁻³ | 20.63°C   | 20.69°C   |
  | ARIMA   | —            | —            | 17.44°C   | 24.24°C   |

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
大学生创新创业训练计划——省级项目 <br>
《投资者情绪与股利分配政策关系研究——基于NLP 理论的机器学习方法》
</div>

* 研究上市公司投资者情绪与股利分配政策的相关性，并通过调研问卷法补充考察非上市公司决策者对投资者情绪的反应。
* 负责借助Python 的文本分析能力构造投资者情绪指数，最终构建多元回归模型。
