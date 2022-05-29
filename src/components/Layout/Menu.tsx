import { Collapse } from "antd";
import { NavLink } from "react-router-dom";
import {
	HomeOutlined,
	SettingFilled,
	SmileOutlined,
	SyncOutlined,
	SecurityScanOutlined,
	FileOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
const { Panel } = Collapse;
const Menu: any = () => {
	const headerCollapse = (title: any, icon: any) => {
		return (
			<div>
				<span className="icon-sidebar">{icon}</span>
				{title}
			</div>
		);
	};
	const renderList = (data: any) => {
		return (
			<Collapse ghost expandIconPosition={"right"}>
				{data?.map((child: any, key: number) => {
					if (child?.children) {
						return (
							<Panel
								header={headerCollapse(child.title, child.icon)}
								key={child.key}>
								{renderList(child.children)}
							</Panel>
						);
					} else {
						return (
							<NavLink to={child.to}>
								<p>
									<span className="icon-sidebar">{child.icon}</span>
									{child.title}
								</p>
							</NavLink>
						);
					}
				})}
			</Collapse>
		);
	};

	return (
		<div>
			{menuList.map((menu: any, key: number) => {
				return (
					<div key={key}>
						<p>
							<b>{menu.title}</b>
						</p>
						{renderList(menu.children)}
					</div>
				);
			})}
		</div>
	);
};
export default Menu;

const menuList = [
	{
		key: "dashboard",
		title: "รายงาน",
		children: [
			{
				key: "system_dashboard",
				title: "ภาพรวมระบบ",
				icon: <HomeOutlined />,
				to: "/",
			},
			{
				key: "course_dashboard",
				title: "รายหลักสูตร",
				icon: <SettingFilled />,
				to: "/course-dashboard",
			},
		],
	},
	{
		key: "course",
		title: "หลักสูตร",
		children: [
			{
				key: "create_course",
				title: "สร้างหลักสูตร",
				icon: <MailOutlined />,
				to: "/create-course",
			},
			{
				key: "open_course",
				title: "เปิดรอบหลักสูตร",
				icon: <SyncOutlined />,
				to: "/open-course",
			},
			{
				key: "setting_course",
				title: "ตั้งค่าหลักสูตร",
				icon: <FileOutlined />,
				children: [
					{
						key: "type_course",
						title: "หมวดหมู่",
						icon: "",
						to: "/type-course",
					},
					{
						key: "certificate",
						title: "ระดับใบรับรอง",
						icon: "",
						to: "/certificate",
					},
				],
			},
		],
	},
	{
		key: "management",
		title: "การจัดการ",
		children: [
			{
				key: "person_setting",
				title: "จัดการบุคลากร",
				icon: <SmileOutlined />,
				children: [
					{ key: "staff", title: "บุคลากร", icon: "", to: "/staff" },
					{ key: "position", title: "ตำแหน่ง", icon: "", to: "/position" },
				],
			},
			{ key: "chat", title: "แชท", icon: <FileOutlined />, to: "/chat" },
			{
				key: "web_setting",
				title: "หน้าเว็บ",
				icon: <SecurityScanOutlined />,
				children: [
					{ key: "library", title: "ห้องสมุด", icon: "", to: "/library" },
					{ key: "banner", title: "แบนเนอร์", icon: "", to: "/banner" },
				],
			},
		],
	},
];
