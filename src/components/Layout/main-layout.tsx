import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Sidebar from "./sidebar";

export default class MainLayout extends React.PureComponent<any, any> {
	public render() {
		return (
			<div style={{ minHeight: "100vh", display: "flex" }}>
				<Sidebar />
				<div style={{ margin: "16px", width: "100%", height: "100%" }}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
