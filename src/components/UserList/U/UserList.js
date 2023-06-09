import React from "react";

const UserList = ()=>{
    return(<div className="outer-content-wrap">
    {/* <!-- <app-breadcum [breadcrumbs]="breadcrumbs"></app-breadcum> --> */}
    <div className="common-content-outer-wrap">
      <div className="each-business-outer">
        <div className="row">
          <div className="col-md-12">
            <p className="org-count-heading">
             Total Items
            </p>
          </div>
        </div>
        <div className="row align-items-end mt-4">
  
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-5 mb-3 mb-md-0">
                <div className="search-box-outer wt--list w-100">
                  <button className="btn-blnak-wrap icon-search-feld">
                    <i className="fa fa-search"></i>
                  </button>
                  <input type="search" placeholder="Search by URN or Designation"
                    className="erx-table-search-field" />
                </div>
              </div>
              <div className="col-md-5 mb-3 mb-md-0">
                <div className="wt--list">
                  <select className="custom-select">
                    <option value="">Select User Type*</option>
                    <option value="0">Normal User</option>
                    <option value="1">Doctor</option>
                    {/* <!-- <option value="2">Pharmacist</option>
                    <option value="3">Lab Tech</option> --> */}
                    <option value="4">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
  
          </div>
          <div className="col-md-12">
            <div className="erx-new-table-row">
              <div className="table-responsive">
                <table className="table table__erx">
                  <thead>
                    <tr>
                      <th scope="col">S.No.</th>
  
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Speciality</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile number</th>
                      <th scope="col">Joined On</th>
                      <th scope="col">URN</th>
                      <th scope="col">Is Verified By Admin</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <div className="user-table-pic--outer">
                          {/* <a className="d-inline-block"><img [src]="
                            user?.profile_pic
                                   ? user?.profile_pic
                                   : 'assets/images/default.png'
                               " alt="table-user-picture" /></a> */}
                        </div>
                      </td>
                      <td>
                        Mohd Javbed
                      </td>
                      <td>Chef</td>
                      <td>Javed@gmail.com</td>
                      <td>7780984169</td>
                      <td>15/10/2023</td>
                      <td>78978989</td>
                      <td>Yes</td>
                      <td>
                        <div className="btn-group dropleft">
                          <button type="button" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                          </button>
                          <div className="dropdown-menu">
  
                            <a className="dropdown-item"><i className="fa fa-pencil mr-3" aria-hidden="true"></i>Edit</a>
                            <a  className="dropdown-item"> <i
                                className="fa fa-check-circle-o mr-3"  aria-hidden="true"></i>Verify Profile</a>
  
                            <a className="dropdown-item" ><i
                              className="fa fa-pencil mr-3" aria-hidden="true"></i>View Profile</a>
                              <a className="dropdown-item" ><i className="fa fa-pencil mr-3" aria-hidden="true"></i>Active</a>
                              <a className="dropdown-item" ><i className="fa fa-trash-o mr-3" aria-hidden="true"></i>InActive</a>
                              <a className="dropdown-item" ><i className="fa fa-trash-o mr-3" aria-hidden="true"></i>Delete</a>
                              <a className="dropdown-item" ><i className="fa fa-trash-o mr-3" aria-hidden="true"></i>Suspend</a>
  
                          </div>
                        </div>
  
                      </td>
                    </tr>
                  </tbody>
                </table>
            
              </div>
              {/* <div  className="w-100 mt-minus1">
                <div className="bg-white nodatapadding w-100">
                  <div className="notabledata">No Found!</div>
                </div>
  
              </div> */}
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default UserList;