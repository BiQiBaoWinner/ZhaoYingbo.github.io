<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2025年11月 – 至今 <br>
《基于大模型与多目标强化学习的因子挖掘研究》
</div>

> 提出融合大语言模型与多目标强化学习的因子挖掘框架，以解决传统强化学习方法面临的奖励稀疏和非平稳性的问题。
> 最终实验结果：样本外的全市场组合上，预测周期为20日时，因子IC > 10%

<div style="text-align:center;">
    <img src="/zhaoyingbo.github.io/static/assets/img/alphapareto/公式化因子挖掘任务对应的马尔可夫决策过程.png" alt="markov" style="width:45%; display:inline-block;">
    <img src="/zhaoyingbo.github.io/static/assets/img/alphapareto/三大模块.png" alt="三大模块" style="width:40%; display:inline-block;">
</div>

> __感知层__：利用Ollama部署DeepSeek‑14B等开源大模型，并以此对挖掘过程中的因子库进行语义解析，将因子逻辑的语义表征融入强化学习状态空间，引导策略网络生成具备经济可解释性的公式化因子；

<div style="text-align:center;">
    <img src="/zhaoyingbo.github.io/static/assets/img/alphapareto/融入大语言模型解析结果的感知层.png" alt="markov" style="width:55%; display:inline-block;">
</div>

> __决策层&演化层__：引入 PPS（预测能力）、RRE（分布稳定性）、PFS（抗波动性）、DH（因子多样性） ，并借助Pareto优化得到Agent的奖励；对于因子构建和因子库维护，我们采用RPN（逆波兰表示法）构建可执行的符号化因子，结合非法动作掩码与MaskablePPO保障语法合法性，并在归档时从预测能力和增量信息两方面进行过滤。
> **Pareto优化**：给定奖励向量 $r_j \in \mathbb{R}^d$，优化 $\lambda \ge 0$：
>
> $$
> g(\lambda) = -\log\left(\frac{1}{B}\sum_{j=1}^{B} \exp(\lambda^\top r_j)\right) + \lambda^\top c
> $$
>
> - $B$：样本数量
> - $c$：每维奖励的分位数阈值
> - 约束实现：$\lambda=\mathrm{softplus}(\tau)$ 保证 $\lambda\ge 0$

<div align="center">
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #ffffffa2;">
        <thead>
            <tr>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">维度</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">含义</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">公式定义</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">PPS(IC)</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">预测能力（截面 IC 的时间均值）</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$$\mathrm{PPS}=\mathrm{mean}_t(\mathrm{IC}_t)$$</td>
            </tr>
            <tr>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">RRE</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">排名稳定性（相邻期秩分布 KL 距离的稳定度）</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$$\mathrm{RRE}=\mathrm{mean}_t\left(\frac{1}{1+\mathrm{KL}(p_t\|p_{t-1})}\right)$$</td>
            </tr>
            <tr>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">PFS</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">扰动鲁棒性（原始与噪声扰动相关性均值）</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$$\mathrm{PFS}=\mathrm{mean}_t(\rho(\text{orig},\text{noisy}))$$</td>
            </tr>
            <tr>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">DH</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">多样性（协方差谱熵归一化）</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">$$\mathrm{DH}=\frac{-\sum_i p_i\log p_i}{\log n},\quad p_i=\frac{\lambda_i}{\sum_k\lambda_k}$$</td>
            </tr>
        </tbody>
    </table>
</div>

#### 沪深300&中证800实验结果:

<div style="text-align:center;">
  <img src="/zhaoyingbo.github.io/static/assets/img/alphapareto/csi300.png" alt="csi300" style="width:110%; display:inline-block;">
  <img src="/zhaoyingbo.github.io/static/assets/img/alphapareto/csi800.png" alt="csi800" style="width:110%; display:inline-block;">
</div>

> 本项目成功将强化学习算法应用于中国A股市场的量化投资策略构建，实验结果表明：
    > 强化学习模型在IC指标上显著优于传统线性模型，且本项目在AlphaGen的基础上引入了LLM的解析能力和多目标Pareto优化，在各规模票池上都获得更好的表现；
    > 模型具有良好的泛化能力和自适应能力，在不同样本规模和步进比例下表现稳定;
    > 挖掘过程中的（基于与现存因子的相关性）过滤机制以及多目标（因子多样性指标DH）Pareto优化，有效避免了单一因子依赖，提高了策略的稳健性.


<div style="margin:1.2rem 0 0.6rem;padding:0.35rem 0.75rem;border-left:4px solid #3948d2;background:linear-gradient(90deg,rgba(57,72,210,0.10),rgba(57,72,210,0));font-weight:700;font-size:1.30rem;border-radius:0 8px 8px 0;">
2023年6月 – 2023年8月 <br>
《成都市投资分析报告（2022）》
</div>


