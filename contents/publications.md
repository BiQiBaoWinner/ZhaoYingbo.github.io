<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2025 <br> 
第一届"良文杯"统计建模与AI预测挑战赛（金融大数据主题）
</div>

* 主导构建基于LGBM 的多因子预测模型，用于精准预测5 只标的在未来5 / 10 / 20 / 40 / 60个tick后的涨跌情况。
* 核心技术与成果：设计并实现了包含价差与深度、挂单分布以及不平衡性在内的65个特征，IC最高达到9.95%，经过ICIR及相关性筛选后得到40个入模因子。采用LightGBM作为学习器，通过动态选择最优样本外阈值，显著提升了模型在不同预测周期下的泛化能力。模型在5 / 10 / 20 / 40 / 60 ticks样本外累计收益分别达到42.26% / 51.65% / 44.27% / 27.98% / 23.51%。

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2023 <br>
四川省大学生金融科技建模大赛
</div>

* 构建以业务价值为导向的三分类模型。基于脱敏用户画像与行为数据，以用户价值加权的WAUC 为优化目标，精准识别高粘性客户（高频复购）。
* 由数据清洗（缺失填补、低方差过滤）到特征工程（KMeans 聚类衍生、WOE 分箱），再到变量筛选（XGBoost + IV），最后进行多模型训练（XGBoost/LightGBM/CatBoost），完成端到端建模流程。单模型WAUC 达0.5788（LGBM），Stacking 融合后提升至0.5799，显著优于基线。

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
CS_t = CS_{\text{trees}} + CS_{\text{forestry-products}} = (1 - \lambda)^t \sum_i^2 \Phi_i X_i + (1 + \mu)^t \sum_i^2 \varphi_i Y_i
$$

$$
\begin{cases}
X_1 = \sum_{j=1}^{14} b_{j1} CS_j \\[2ex]
X_2 = \sum_{j=1}^{14} b_{j2} CS_j
\end{cases}
\qquad
\begin{cases}
Y_1 = \sum_{k=1}^4 c_{k1} \text{Quantity}_k \\[2ex]
Y_2 = \sum_{k=1}^4 c_{k2} \text{Quantity}_k
\end{cases}
$$

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
MathorCup 数学建模竞赛 <br>
《基于K-Means聚类分析的基站站址及类型选择优化模型》
</div>

* 主导构建“基于K‑Means 聚类与多目标优化的5G 基站选址模型”，解决在成本约束下最大化弱覆盖区域业务量的问题。
* 核心技术与贡献：对2500x2500 网格内的海量弱覆盖点数据进行清洗，并采用K‑Means 算法将其精准划分为5 个片区。针对每个片区，建立以“最小化建设成本”和“最大化业务量覆盖率”为核心的双目标模型。创新性地引入“成本贡献因子”和“增量成本因子”，量化不同基站类型（宏基站/微基站）在不同位置的性价比。此外，构建了更贴近现实的三扇区非均匀覆盖模型，引入“旋转角度$\beta$”变量，最终将业务量覆盖率从92.88%（圆形覆盖）显著提升至75.26%（修正后扇区覆盖），成功验证了模型在复杂现实场景下的有效性。
* 团队角色：作为核心成员，负责数学模型的构建、算法实现与论文撰写。

  * 扇形覆盖 + $\beta$旋转:

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/mathorcup扇形覆盖beta旋转1.png" alt="Minute_logvol_skew" style="width:40%; display:inline-block;">
  <img src="/zhaoyingbo.github.io/static/assets/img/mathorcup扇形覆盖beta旋转2.png" alt="Minute_MPC5_max_v2" style="width:40%; display:inline-block;">

</div>

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
APMCM 亚太大学生数学建模竞赛 <br>
</div>

<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
大学生创新创业训练计划——省级项目 <br>
《投资者情绪与股利分配政策关系研究——基于NLP 理论的机器学习方法》
</div>

* 研究上市公司投资者情绪与股利分配政策的相关性，并通过调研问卷法补充考察非上市公司决策者对投资者情绪的反应。
* 负责借助Python 的文本分析能力构造投资者情绪指数，最终构建多元回归模型。
