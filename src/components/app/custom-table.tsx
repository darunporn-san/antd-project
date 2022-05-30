import React, { useState, useEffect } from "react";
import { Table, Pagination, Space, Dropdown, Menu } from "antd";
import {
	EllipsisOutlined,
	DeleteOutlined,
	EditOutlined,
} from "@ant-design/icons";
import type { ColumnsType, TablePaginationConfig } from "antd/lib/table";

const menu = (
	<Menu
		items={[
			{
				label: (
					<span>
						<EditOutlined />
						<label style={{ marginLeft: "5px" }}>แก้ไขข้อมูล</label>
					</span>
				),
				key: "0",
			},
			{
				label: (
					<span>
						<DeleteOutlined />
						<label style={{ marginLeft: "5px" }}>ลบรายการนี้</label>
					</span>
				),
				key: "1",
			},
		]}
	/>
);

const CustomTable: React.FC<any> = (props) => {
	const [columns, setColumns] = useState([
		{
			title: "",
			key: "action",
			render: (_: any, record: any) => (
				<Dropdown overlay={menu} trigger={["click"]}>
					<a onClick={(e) => e.preventDefault()}>
						<Space>
							<EllipsisOutlined />
						</Space>
					</a>
				</Dropdown>
			),
		},
	]);
	useEffect(() => {
		setColumns(props.column?.concat(columns));
	}, []);
	return (
		<>
			<Table dataSource={props.data} columns={columns} pagination={false} />
			<div className="pagination">
				<Pagination defaultCurrent={2} total={100} />
			</div>
		</>
	);
};
export default CustomTable;
