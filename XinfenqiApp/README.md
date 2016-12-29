# 插件:

1. 路由
	react-native-router-flux: https://github.com/aksonov/react-native-router-flux
2. 可滑动tab效果
	react-native-scrollable-tab-view: https://github.com/skv-headless/react-native-scrollable-tab-view
3. 本地存储
	react-native-storage: https://github.com/sunnylqm/react-native-storage
4. button, ButtonGroup， 侧滑菜单，radio, checkbox, list, Tabs等基础组件：
	react-native-elements:
	https://github.com/react-native-community/react-native-elements
5. 矢量图标
	react-native-vector-icons:
	https://github.com/oblador/react-native-vector-icons

# 自定义组件:

	1. Modal:
			 Actions.ModalContainer({modalView: Test, fillModal: false})
			 Test: 为自定义的Page或提示框
			 fillModal: 为是否需要全屏显示，默认不全屏，框口居中
			 Test中: this.props.closeModal为关闭窗口
	2. button:
		react-native-elements



# 路由使用方式:
React-Native-Router-Flux:

		<<<https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md>>>
		Actions:
				Actions.'key'({params}):
					1.推送到'key'所标记的页面, 同时'key'的props接收{params}内容
					2.params中含有{type: 'replace|jump|reset...'}, 则定义了跳转方式，[注]同Scene:1的方式
				Actions.refresh({params}): 刷新当前页面，params在刷新后进入props可以直接调用
				Actions.pop(): 推出当前页面
				Actions.popTo(key): 推出到key的页面, [注]key的页面要在栈中，而不是没打开过或已推出的页面

		Scene:
				key: Scene唯一键值，用于定位该Scene
				component: Scene的实际页面
				title: 实际页面的标题
				type: 该页面的方式{PUSH(默认), REPLACE, RESET ...}
				initial: 'children'级别中的启动页
				panHandlers={null}: 禁止手势滑动返回上一页
				duration={1}: 控制跳转页面的动画执行时间，单位: ms

				eg:				
					1. <Scene key="home" component={Home} title="Replace" type={ActionConst.REPLACE} initial={true}/>
					2. <Scene key='parent'>
							<Scene key='children' initial={true}></Scene>
						 </Scene>
						 a. Scene只能同级跳转或从'children'到'parent'级别
						 b. 'parent'不能直接跳转'children'级别的Scene，只能跳转'parent','parent'根据顺序定位Scene
