import { Image, Avatar, Badge } from "antd";
import logo from "../../asset/images/logo.svg";
import { UserOutlined } from "@ant-design/icons";
import Menu from "./Menu";
const Sidebar: any = () => {
	return (
		<div className="sidebar-layout">
			<div className="sidebar">
				<div className="head">
					<Image width={200} src={logo} />
					<Badge dot status="success" offset={["-15px", "90px"]}>
						<Avatar size={100} icon={<UserOutlined />} />
					</Badge>
					<p>Test</p>
					<p>Online</p>
				</div>
				<hr />
				<div className="menu">
					<Menu />
				</div>
			</div>
			<div className="logout">Logout</div>
		</div>
	);
};
export default Sidebar;
