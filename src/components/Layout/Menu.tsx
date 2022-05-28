import { Collapse } from "antd";

const { Panel } = Collapse;
const Menu: any = () => {
	const renderList = (data: any) => {
		return (
			<Collapse ghost expandIconPosition={"right"}>
				{data?.map((child: any, key: number) => {
					if (child?.children) {
						return (
							<Panel header={child.title} key={child.key}>
								{renderList(child.children)}
							</Panel>
						);
					} else {
						return <p>{child.title}</p>;
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
			{ key: "system_dashboard", title: "ภาพรวมระบบ", icon: "", to: "" },
			{ key: "course_dashboard", title: "รายหลักสูตร", icon: "", to: "" },
		],
	},
	{
		key: "course",
		title: "หลักสูตร",
		children: [
			{ key: "create_course", title: "สร้างหลักสูตร", icon: "", to: "" },
			{ key: "open_course", title: "เปิดรอบหลักสูตร", icon: "", to: "" },
			{
				key: "setting_course",
				title: "ตั้งค่าหลักสูตร",
				icon: "",
				children: [
					{ key: "type_course", title: "หมวดหมู่", icon: "", to: "" },
					{ key: "certificate", title: "ระดับใบรับรอง", icon: "", to: "" },
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
				icon: "",
				children: [
					{ key: "staff", title: "บุคลากร", icon: "", to: "" },
					{ key: "position", title: "ตำแหน่ง", icon: "", to: "" },
				],
			},
			{ key: "chat", title: "แชท", icon: "", to: "" },
			{
				key: "web_setting",
				title: "หน้าเว็บ",
				icon: "",
				children: [
					{ key: "library", title: "ห้องสมุด", icon: "", to: "" },
					{ key: "banner", title: "แบนเนอร์", icon: "", to: "" },
				],
			},
		],
	},
];
