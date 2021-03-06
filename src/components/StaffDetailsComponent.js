import React, { Component } from "react";
import dateFormat from "dateformat"; // format du lieu ngay thang nam
class StaffDetailsComponent extends Component {
  // ham render ra thong tin nhan vien duoc click
  renderStaff(staff) {
    if (staff != null)
      return (
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 detail">
            <img src={staff.image} alt={staff.name}></img>
          </div>
          <div className="col-12 col-md-8 col-lg-9 detail ">
            <p>
              <b>Họ và tên: {staff.name}</b>
            </p>
            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")} </p>
            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {staff.department.name}</p>
            <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
            <p>Số ngày đã làm thêm: {staff.overTime}</p>
          </div>
        </div>
      );
    else return <p>Bấm vào tên nhân viên để xem thông tin</p>;
  }
  render() {
    return <div className="">{this.renderStaff(this.props.staff)}</div>;
  }
}

export default StaffDetailsComponent;
