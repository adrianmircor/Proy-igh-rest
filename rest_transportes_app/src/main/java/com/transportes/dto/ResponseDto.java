package com.transportes.dto;

public class ResponseDto<T> {

	private int code;
	private String message;
	private T bag;

	public ResponseDto() {
		this.code = -1;
		this.message = "Hay error.";
		this.bag = null;
	}

	public ResponseDto(int code, String message, T bag) {
		super();
		this.code = code;
		this.message = message;
		this.bag = bag;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public T getBag() {
		return bag;
	}

	public void setBag(T bag) {
		this.bag = bag;
	}

	
}