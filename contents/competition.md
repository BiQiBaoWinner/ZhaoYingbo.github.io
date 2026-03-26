<style>
    /* 全局表格样式 - 确保所有表格内容居中 */
    table td, table th {
        text-align: center !important;
        vertical-align: middle !important;
    }
</style>

<div class="competition-nav">
  <a href="#comp-2025">2025 良文杯</a>
  <a href="#comp-2023">2023 金融科技</a>
  <a href="#comp-2022-mcm">2022 MCM/ICM</a>
  <a href="#comp-2022-mathor">2022 MathorCup</a>
  <a href="#comp-2022-apmcm">2022 APMCM</a>
  <a href="#comp-2022-inn">2022 创新项目</a>
</div>

<div id="comp-2025" class="competition-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2025 <br> 
第一届"良文杯"统计建模与AI预测挑战赛（金融大数据主题）
</div>

* 主导构建基于LGBM 的多因子预测模型，用于精准预测5 只标的在未来5 / 10 / 20 / 40 / 60个tick后的涨跌情况。
* 核心技术与成果：设计并实现了包含价差与深度、挂单分布以及不平衡性在内的65个特征，IC最高达到9.95%，经过ICIR及相关性筛选后得到40个入模因子。采用LightGBM作为学习器，通过动态选择最优样本外阈值，显著提升了模型在不同预测周期下的泛化能力。模型在5 / 10 / 20 / 40 / 60 ticks样本外累计收益分别达到42.26% / 51.65% / 44.27% / 27.98% / 23.51%。

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/lwcup.png" alt="LWCUP" style="width:80%; display:inline-block;">
</div>

<div id="comp-2023" class="competition-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2023 <br>
四川省大学生金融科技建模大赛
</div>

* 构建以业务价值为导向的三分类模型。基于脱敏用户画像与行为数据，以用户价值加权的WAUC 为优化目标，精准识别高粘性客户（高频复购）。
* 由数据清洗（缺失填补、低方差过滤）到特征工程（KMeans 聚类衍生、WOE 分箱），再到变量筛选（XGBoost + IV），最后进行多模型训练（XGBoost/LightGBM/CatBoost），完成端到端建模流程。单模型WAUC 达0.5788（LGBM），Stacking 融合后提升至0.5799，显著优于基线。

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/fintech.png" alt="金融科技" style="width:80%; display:inline-block;">
</div>

注：AX/BX/CX为新网银行提供的客户脱敏数据，'_Max'/'_Range'/'_mul'/'_Mode'为特征工程中所使用的操作符。

<div id="comp-2022-mcm" class="competition-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
美国大学生数学建模竞赛（MCM/ICM）<br>
《Decision-making model for forest management plans based on Principal Component Analysis and MultipleRegression Analysis》
</div>

* **主导构建"森林碳汇与管理决策"综合模型**，从全球气候变化背景出发，将复杂的生态、经济与社会因素（如树种生物量、林产品产量、人口及旅游发展）进行量化整合。
* 整理相关文献，根据生物量膨胀系数法计算得到树种的生物量和碳储量，以此借助PCA算法对14种主要树种的碳储量数据进行降维，建立综合指标对碳储量进行代理后进行多元回归分析，成功构建了一个能预测碳储量并指导最优管理决策的模型，最终模型R²高达0.8031，验证了其强大的解释力；除此之外，在修正模型中还考虑到了人口特征以及旅游发展特征。
* 团队角色：核心建模成员，负责模型框架设计、算法实现与论文撰写。

  * 碳汇公式如下：

    <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px; overflow-x: auto;">
      CS<sub>t</sub> = CS<sub>trees</sub> + CS<sub>forestry-products</sub> = (1 - λ)<sup>t</sup> Σ<sub>i=1</sub><sup>2</sup> Φ<sub>i</sub> X<sub>i</sub> + (1 + μ)<sup>t</sup> Σ<sub>i=1</sub><sup>2</sup> φ<sub>i</sub> Y<sub>i</sub>
    </div>
  * X`<sub>`1`</sub>` 和 X`<sub>`2`</sub>` 为林木碳汇的中间变量，分别表示不同系数加权下的林木碳汇总量, 其计算公式如下：

    <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px; overflow-x: auto;">
      X<sub>1</sub> = Σ<sub>j=1</sub><sup>14</sup> b<sub>j1</sub> · CS<sub>j</sub>, X<sub>2</sub> = Σ<sub>j=1</sub><sup>14</sup> b<sub>j2</sub> · CS<sub>j</sub>
    </div>
  * Y`<sub>`1`</sub>` 和 Y`<sub>`2`</sub>` 为林产品碳汇的中间变量，分别表示不同系数加权下的林产品碳汇总量, 其计算公式如下：

    <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px; overflow-x: auto;">
      Y<sub>1</sub> = Σ<sub>k=1</sub><sup>4</sup> c<sub>k1</sub> · Quantity<sub>k</sub>, Y<sub>2</sub> = Σ<sub>k=1</sub><sup>4</sup> c<sub>k2</sub> · Quantity<sub>k</sub>
    </div>

<div id="comp-2022-mathor" class="competition-anchor"></div>
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
      <th style="border: 1px solid #ddd; padding: 12px;">公式</th>
      <th style="border: 1px solid #ddd; padding: 12px;">表达式</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">辐射范围半径（随偏离角度衰减）</td>
      <td style="border: 1px solid #ddd; padding: 10px;">r(α) = -3r/2π · α + r</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">基站类型选择参数</td>
      <td style="border: 1px solid #ddd; padding: 10px;">η = traffic(X<sup>m</sup>) / traffic(X<sup>M</sup>)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">基站类型选择函数</td>
      <td style="border: 1px solid #ddd; padding: 10px;">φ = Δγ/γ(X<sup>m</sup>) - η</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">辐射圈业务量计算</td>
      <td style="border: 1px solid #ddd; padding: 10px;">traffic(𝒞<sub>j</sub><sup>i</sup>) = Σ<sub>(x-x<sub>j</sub><sup>i</sup>)<sup>2</sup>+(y-y<sub>j</sub><sup>i</sup>)<sup>2</sup> ≤ r<sup>2</sup></sub> traffic(x,y)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">最优旋转角度</td>
      <td style="border: 1px solid #ddd; padding: 10px;">β* = arg max<sub>β<sub>n</sub></sub> { traffic(ℛ<sub>j</sub><sup>i</sup>, β<sub>n</sub>) }</td>
    </tr>
  </table>
  注：𝒞<sub>j</sub><sup>i</sup> 表示以 Q<sub>j</sub><sup>i</sup> 为圆心的圆形辐射区域，ℛ<sub>j</sub><sup>i</sup> 表示修正后的三扇区覆盖区域。

* 主要结果:

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #fff;">
    <tr style="background: #f5f5f5;">
      <th style="border: 1px solid #ddd; padding: 12px;">成果指标</th>
      <th style="border: 1px solid #ddd; padding: 12px;">数值</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">弱覆盖点业务量覆盖率</td>
      <td style="border: 1px solid #ddd; padding: 10px;"><strong>92.88%</strong></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">最优旋转角度覆盖率</td>
      <td style="border: 1px solid #ddd; padding: 10px;"><strong>75.26%</strong></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">模型稳定性检验覆盖率范围</td>
      <td style="border: 1px solid #ddd; padding: 10px;">89%–93%</td>
    </tr>
  </table>
* 聚类方法对比:

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #fff;">
    <tr style="background: #f5f5f5;">
      <th style="border: 1px solid #ddd; padding: 12px;">评价指标</th>
      <th style="border: 1px solid #ddd; padding: 12px;">系统聚类</th>
      <th style="border: 1px solid #ddd; padding: 12px;">K-Means</th>
      <th style="border: 1px solid #ddd; padding: 12px;">DBSCAN</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">紧密度</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.52</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.34</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.29</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">分割度</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.55</td>
      <td style="border: 1px solid #ddd; padding: 10px;"><strong>0.85</strong></td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.82</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">戴维森堡丁指数</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.67</td>
      <td style="border: 1px solid #ddd; padding: 10px;"><strong>0.23</strong></td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.44</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">邓恩指数</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.23</td>
      <td style="border: 1px solid #ddd; padding: 10px;"><strong>0.91</strong></td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.78</td>
    </tr>
  </table>

<div id="comp-2022-apmcm" class="competition-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
APMCM 亚太大学生数学建模竞赛 <br>
</div>

在本项目中，我们构建了多种时间序列与回归模型，分析全球气温变化趋势，并预测未来关键时间节点的温度变化。

- **多元线性回归**：引入 GDP、人口、化石能源、森林覆盖率四因子
- **XGBOOST**：非线性集成树模型，通过正则化控制过拟合
- **ARIMA**：时间序列分析，捕捉长期趋势与周期性波动
- **虚拟变量回归**：量化工业革命、气候带、自然灾害的影响

* 关键公式-自然灾害响应分析（引入火山爆发次数、森林火灾次数、肺炎疫情虚拟变量）

<div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px; overflow-x: auto;">
  Tem<sub>t</sub><sup>g</sup> = ξ<sub>0</sub> + ξ<sub>1</sub> · VolcanicEruption<sub>t</sub> + ξ<sub>2</sub> · ForestFire<sub>t</sub> + ξ<sub>3</sub> · Pneumonia<sub>t</sub> + ε<sub>t</sub>
</div>

* 模型评估与预测
* 采用 MSE 和 MAPE 作为模型评价指标，比较三种模型在历史数据拟合与未来预测中的表现：

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #fff;">
    <tr style="background: #f5f5f5;">
      <th style="border: 1px solid #ddd; padding: 12px;">模型</th>
      <th style="border: 1px solid #ddd; padding: 12px;">MSE</th>
      <th style="border: 1px solid #ddd; padding: 12px;">MAPE</th>
      <th style="border: 1px solid #ddd; padding: 12px;">2050年预测</th>
      <th style="border: 1px solid #ddd; padding: 12px;">2100年预测</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">MLR</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.043</td>
      <td style="border: 1px solid #ddd; padding: 10px;">0.039</td>
      <td style="border: 1px solid #ddd; padding: 10px;">18.97°C</td>
      <td style="border: 1px solid #ddd; padding: 10px;">25.56°C</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">XGBOOST</td>
      <td style="border: 1px solid #ddd; padding: 10px;">3.305×10⁻⁴</td>
      <td style="border: 1px solid #ddd; padding: 10px;">1.081×10⁻³</td>
      <td style="border: 1px solid #ddd; padding: 10px;">20.63°C</td>
      <td style="border: 1px solid #ddd; padding: 10px;">20.69°C</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">ARIMA</td>
      <td style="border: 1px solid #ddd; padding: 10px;">—</td>
      <td style="border: 1px solid #ddd; padding: 10px;">—</td>
      <td style="border: 1px solid #ddd; padding: 10px;">17.44°C</td>
      <td style="border: 1px solid #ddd; padding: 10px;">24.24°C</td>
    </tr>
  </table>

<div id="comp-2022-inn" class="competition-anchor"></div>
<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2022 <br>
大学生创新创业训练计划——省级项目 <br>
《投资者情绪与股利分配政策关系研究——基于NLP 理论的机器学习方法》
</div>

* 研究上市公司投资者情绪与股利分配政策的相关性，并通过调研问卷法补充考察非上市公司决策者对投资者情绪的反应。
* 负责借助Python 的文本分析能力构造投资者情绪指数，最终构建多元回归模型。

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr style="background: #f5f5f5;">
      <th style="border: 1px solid #ddd; padding: 12px;">公式名称</th>
      <th style="border: 1px solid #ddd; padding: 12px;">表达式</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Lintner股利模型</td>
      <td style="border: 1px solid #ddd; padding: 10px;">m = DIV<sub>1</sub> - DIV<sub>0</sub> = s · (r · EPS<sub>1</sub> - DIV<sub>0</sub>)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">主题权重计算</td>
      <td style="border: 1px solid #ddd; padding: 10px;">W<sub>i</sub> = L<sub>i</sub>的主题包含的评论数量 / 评论总数量</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">看涨指标</td>
      <td style="border: 1px solid #ddd; padding: 10px;">B<sub>ts</sub> = (Σ W<sub>i</sub> L<sub>i</sub><sup>pos</sup> - Σ W<sub>i</sub> L<sub>i</sub><sup>neg</sup>) / (Σ W<sub>i</sub> L<sub>i</sub><sup>pos</sup> + Σ W<sub>i</sub> L<sub>i</sub><sup>neg</sup>)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">投资者情绪指数(TSI)</td>
      <td style="border: 1px solid #ddd; padding: 10px;">TSI = B<sub>ts</sub> · ln(1 + M<sup>pos</sup> + M<sup>neg</sup> + M<sup>neu</sup>)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">多元回归模型</td>
      <td style="border: 1px solid #ddd; padding: 10px;">r = a<sub>0</sub> + a<sub>1</sub> InSent + a<sub>2</sub> Size + a<sub>3</sub> Lev + a<sub>4</sub> ROE + a<sub>5</sub> Growth + a<sub>6</sub> BM + a<sub>7</sub> SOE + a<sub>8</sub> Top + a<sub>9</sub> Balance + ε</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">指数移动平均(EMA)</td>
      <td style="border: 1px solid #ddd; padding: 10px;">EMA<sub>N</sub>(x<sub>n</sub>) = 2/(N+1) · Σ<sub>k=0</sub><sup>∞</sup> [(N-1)/(N+1)]<sup>k</sup> x<sub>n-k</sub></td>
    </tr>
  </table>
