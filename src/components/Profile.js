import React from "react";
import "./../styling/ProfileStyles.css";

function Profile() {
  return (
    <div className="Profile">
      <div className="container">
        <header className="clearfix mt-4">
            <center><h1>Profile Page</h1></center>
        </header>
        
        <div className="clearfix">
        <div className="row">
          <center>
            <div className="col-md-4 animated fadeIn" >
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwfShyrDEf58w0Jyeia6GNkAhYnwF9C46ig&usqp=CAU"
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <div>
                    <table>
                      <tr>
                        <td>Name:</td>
                        <td>Princy</td>
                      </tr>
                      <tr>
                        <td>Mail id:</td>
                        <td>princy18cs@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Phone no.:</td>
                        <td>9874587421</td>
                      </tr>
                      <tr>
                        <td>Work Experience:</td>
                        <td>
                          <ul>
                            <li>1st experience</li>
                            <li>2nd experience </li>
                            <li>3rd experience</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Projects :</td>
                        <td>
                        <ul>
                            <li>1st project</li>
                            <li>2nd project </li>
                            <li>3rd project</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Hobbies:</td>
                        <td>Traveling, Coding</td>
                      </tr>
                    </table>


                  </div>
                  
                
                </div>
              </div>
            </div>
            </center>
        </div>
        
      </div>

        <div class="footer">
            <p>
                <center>2022  Campaign Management Platform for Women </center>
                Team 6
                </p>
            </div>
      </div>
    </div>
  );
}


export default Profile;