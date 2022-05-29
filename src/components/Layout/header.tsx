import { Breadcrumb, Badge } from "antd";
import { NotificationOutlined, WechatOutlined } from "@ant-design/icons";

const Header: any = () => {
	return (
		<div className="header-content">
			<div>
				<Breadcrumb>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>
						<a href="">Application Center</a>
					</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<div>
				<Badge dot status="warning">
					<NotificationOutlined style={{ fontSize: 24 }} />
				</Badge>
				<Badge dot status="warning">
					<WechatOutlined style={{ fontSize: 24 }} />
				</Badge>
			</div>
		</div>
	);
};
export default Header;
