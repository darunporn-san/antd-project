import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Sidebar from "./Sidebar";
const { Header, Content, Footer, Sider } = Layout;

export default class MainLayout extends React.PureComponent<any, any> {
	public render() {
		return (
			<div style={{ minHeight: "100vh", display: "flex" }}>
				<Sidebar />
				<div>
					<div style={{ margin: "0 16px" }}>{this.props.children}</div>
				</div>
			</div>
		);
	}
}
