#   TutorialToken

TutorialToken是根据公众号“换币乐”文章《五分钟开发您自己的ERC20代币》所发布的一个ERC20兼容的代币。

#  使用步骤

1. 下载代码

```
git clone https://github.com/bubble501/tutorialToken.git
```

2. 安装依赖

```
npm install
```

3. 在根目录创建文件 .env, 在.env文件记录下对应的私钥。MAINNET_PRIVATE_KEY为主网的私钥。 ROPSTEN_PRIVATE_KEY为ropsten测试网络的私钥。内容如下：

```
MAINNET_PRIVATE_KEY="你的主网账户私钥"
ROPSTEN_PRIVATE_KEY="你的ropsten账户私钥“
```

4. truffle compile

5. truffle deploy --network ropsten (如果是部署到主网请将参数ropsten换成mainnet)