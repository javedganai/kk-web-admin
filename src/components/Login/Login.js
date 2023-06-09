import {React} from 'react';


 const Login = ()=>{
    return(<div>
        <section className="login-bg">
    {/* <!-- <div className="erx-login-logo-outer">
      <a href="#" className="erx-login-logo">Erx</a>
    </div> --> */}
    <div className="container mt-lg-3">
      <div className="row align-items-xl-center">
  
        <div className="col-md-12 col-xl-12 login-con">
          <div className="login-form-outer">
            <form className="form-login-erx">
              <div className="upper-tabs">
  
  
                <p className="tab-login-heading">Login</p>
  
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-patient" role="tabpanel"
                    aria-labelledby="pills-patient-tab">
  
  
  
                    <div className="row">
                      <div className="col-md-12 input-group form-group login_input">
  
  
                        <input type="text" className="form-control login_txt bdr-rr" placeholder=" Email" name="urn"
                           />
  
  
                      </div>
                      <div className="col-md-12 input-group form-group login_input">
                        <input type="password" className="form-control login_txt bdr-rr" placeholder="Password"
                          name="password" formControlName="password" />
  
                        <div className="position-relative w-100 py-md-2">
  
  
                        </div>
  
                      </div>
                   
                    </div>
  
  
  
                    {/* <!-- <div className="form-rows mt-3">
                      <div className="row">
                       
  
                        <div className="col-sm-6 text-left text-lg-right mt-3 mt-sm-0">
                          <a routerLink="/forgot-password" className="forgot-pswd-link-login xsfont">Forgot Password?</a>
                        </div>
                      </div>
                    </div> --> */}
  
  
                    <div className="form-rows row">
                      <div className="col-sm-6 text-center">
                        <button type="submit" className="login-erx-btn border-0">login now</button>
                      </div>
                      {/* <!-- <div className="col-sm-6 text-center mt-3 mt-sm-0">
                        <button type="submit" (click)="register()" className="login-erx-btn border-0">Register</button>
                      </div> --> */}
  
  
                    </div>
  
                  </div>
  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- <app-footer></app-footer> --> */}
    </div>)
}

export default Login;