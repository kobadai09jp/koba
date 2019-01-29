package com.internousdev.template.action;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionSupport;

public class UserCreateConfirmAction extends ActionSupport implements SessionAware{

	private String loginUserId;
	private String loginPassword;
	private String userName;
	public Map<String,Object>session;
	private String errorMessage;

	public String execute() {
		String result=SUCCESS;

		if(!(loginUserId.equals(""))&&!(userName.equals(""))&&!(loginPassword.equals(""))) {
			session.put("loginuserId",loginUserId);
			session.put("loginPassword", loginPassword);
			session.put("userName", userName);
		}else {
			setErrorMessage("未記入の項目があります");
			result =ERROR;
		}
		return result;
	}
	public String getLoginUserId() {
		return loginUserId;
	}
	public void setLoginId(String userId) {
		this.loginUserId=userId;
	}

	public String getLoginPassword() {
		return loginPassword;
	}
	public void setLoginPassword(String loginPassword) {
		this.loginPassword=loginPassword;
	}

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName=userName;
	}

	public Map<String,Object> session(){
		return session;
	}
	@Override
	public void setSession(Map<String,Object>session) {
		this.session=session;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage=errorMessage;
	}


}
