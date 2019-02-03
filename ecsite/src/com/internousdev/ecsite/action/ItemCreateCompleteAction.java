package com.internousdev.ecsite.action;
import java.sql.SQLException;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.internousdev.ecsite.dao.ItemCreateCompleteDAO;
import com.opensymphony.xwork2.ActionSupport;

public class ItemCreateCompleteAction extends ActionSupport implements SessionAware {

	public Map<String ,Object>session;
	public String exectue() throws SQLException{

		ItemCreateCompleteDAO itemCreateCompleteDAO=new ItemCreateCompleteDAO();
		itemCreateCompleteDAO.createItem(session.get("itemName").toString(),
				session.get("ItemPrice").toString(),
				session.get("ItemStock").toString());
		String result=SUCCESS;
		return result;



	}
	public Map<String,Object>getSession(){
		return session;
	}

	@Override
	public void setSession(Map<String,Object>session) {
		this.session=session;
	}

}
