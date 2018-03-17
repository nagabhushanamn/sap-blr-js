package com.bank.mts.service;

import org.apache.log4j.Logger;

import com.bank.mts.model.Account;
import com.bank.mts.repository.AccountRepository;

public class TxrServiceImpl implements TxrService {

	private Logger logger = Logger.getLogger("mts");

	private AccountRepository accountRepository;

	public TxrServiceImpl() {
		logger.info("Txr service instantiated..");
	}

	public void setAccountRepository(AccountRepository accountRepository) {
		this.accountRepository = accountRepository;
		logger.info("accountRepository injected to TxrService");
	}

	public boolean txr(double amount, String fromAccNum, String toAccNum) {
		logger.info("New Txr begin");

		// load from & to accounts
		Account fromAccount = accountRepository.loadAccount(fromAccNum);
		Account toAccount = accountRepository.loadAccount(toAccNum);

		// debit & credit
		fromAccount.setBalance(fromAccount.getBalance() - amount); // debit
		toAccount.setBalance(toAccount.getBalance() + amount); // credit

		// update both accounts
		accountRepository.updateAccount(fromAccount);
		accountRepository.updateAccount(toAccount);

		logger.info("Txr success");
		return true;
	}

}
