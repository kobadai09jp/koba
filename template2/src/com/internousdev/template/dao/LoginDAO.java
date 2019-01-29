package com.internousdev.template.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.internousdev.template.dto.LoginDTO;
import com.internousdev.template.util.DBConnector;

public class LoginDAO {
	public LoginDTO getLoginUserinfo(String loginUserId,String loginPassword) {
		DBConnector dbConnector =new DBConnector();
		Connection connection =dbConnector.getConnection();
		LoginDTO loginDTO =new LoginDTO();

		String sql="select * from login_user_transaction where login_id =? and lagin_pass =?";

		try {
			PreparedStatement preparedStatement= connection.prepareStatement(sql);

			preparedStatement.setString(1, loginUserId);
			preparedStatement.setString(2, loginPassword);
			ResultSet resultSet=preparedStatement.executeQuery();

			if(resultSet.next()) {
				loginDTO.setLoginId(resultSet.getString("login_id"));
				loginDTO.setLoginPassword(resultSet.getString("login_password"));
				loginDTO.setUserName(resultSet.getString("userName"));

				if(!(resultSet.getString("LoginId").equals(null))) {
					loginDTO.setLoginFlg(true);
				}
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return loginDTO;
	}

}
