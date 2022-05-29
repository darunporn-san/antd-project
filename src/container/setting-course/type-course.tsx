import { Tag, Switch, Card, Button } from "antd";
import Header from "../../components/layout/header";
import SearchInput from "../../components/app/search-input";
import CustomTable from "../../components/app/custom-table";
import type { ColumnsType } from "antd/lib/table";
import { EllipsisOutlined } from "@ant-design/icons";

interface DataType {
	key: string;
	name: string;
	dateCreate: string;
	address: string;
	tags: string[];
}
const onChange = (checked: boolean) => {
	console.log(`switch to ${checked}`);
};
const columns: ColumnsType<DataType> = [
	{
		title: "ชื่อหมวดหมู่",
		dataIndex: "name",
		key: "name",
		render: (text) => {
			return text;
		},
	},
	{
		title: "วันที่สร้าง",
		dataIndex: "dateCreate",
		key: "dateCreate",
	},

	{
		title: "สถานะการใช้งาน",
		key: "tags",
		dataIndex: "tags",
		render: (_, { tags }) => (
			<>
				<Switch defaultChecked onChange={onChange} />
			</>
		),
	},
];

const dataSource: DataType[] = [
	{
		key: "1",
		name: "โค้ช ทีมชาติไทย",
		dateCreate: "10/10/2022",
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"],
	},
	{
		key: "2",
		name: "กรรมการฟุตบอล",
		dateCreate: "10/10/2022",
		address: "London No. 1 Lake Park",
		tags: ["loser"],
	},
	{
		key: "3",
		name: "กรรมการทีมชาติไทย",
		dateCreate: "10/10/2022",
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"],
	},
];

const TypeCourse: any = () => {
	return (
		<div>
			<Header />
			<div className="content">
				<div className="title-card">
					<h1 style={{ fontWeight: 600 }}>หมวดหมู่</h1>
					<Button type="primary">+ สร้างหมวดหมู่</Button>
				</div>
				<SearchInput></SearchInput>
				<Card style={{ paddingTop: "20px", marginTop: "20px" }}>
					<CustomTable data={dataSource} column={columns} />
				</Card>
			</div>
		</div>
	);
};
export default TypeCourse;
