package com.internousdev.template.action;
import java.sql.SQLException;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.internousdev.template.dao.MyPageDAO;
import com.internousdev.template.dto.MyPageDTO;
import com.opensymphony.xwork2.ActionSupport;


public class MyPageAction extends ActionSupport implements SessionAware {
	public Map<String, Object>session;
	public String deleteFlg;
	private String result;

	public String execute()throws SQLException {
		MyPageDTO myPageDTO=new MyPageDTO();
		MyPageDAO myPageDAO=new MyPageDAO();

		if(deleteFlg==null) {
			String item_transaction_id=session.get("id").toString();
			String user_master_id=session.get("login_user_id").toString();

			myPageDTO=myPageDAO.getMyPageUserInfo(item_transaction_id, user_master_id);

			session.put("buyItem_name", myPageDTO.getItemName());
			session.put("total_price", myPageDTO.getTotalPrice());
			session.put("total_count",myPageDTO.getTotalCount());
			session.put("total_payment", myPageDTO.getPayment());
			session.put("message", "");

		}else if(deleteFlg.equals("1")) {
			delete();
		}
		result=SUCCESS;
		return result;

	}
	public void delete()throws SQLException{

		MyPageDAO myPageDAO =new MyPageDAO();

		String item_transaction_id=session.get("id").toString();
		String user_master_id=session.get("login_user_id").toString();

		int res =myPageDAO.buyItemHistoryDelete(item_transaction_id, user_master_id);

		if(res>0) {
			session.put("message", "商品を正しく削除しました。");
		}else if(res==0) {
			session.put("message", "商品の削除に成功しました。");
		}
	}
	public String getDeleteFlg() {
		return deleteFlg;
	}
	public void setgetDeleteFlg(String deleteFlg) {
		this.deleteFlg=deleteFlg;
	}

	@Override
	public void setSession(Map<String,Object>loginSessionMap) {
		this.session=loginSessionMap;
	}
}
