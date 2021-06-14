package com.example.spring;

public class Triangle {

    private String aValue;
    private String bValue;
    private String cValue;

    public Triangle(String aValue, String bValue, String cValue) {
        this.aValue = aValue;
        this.bValue = bValue;
        this.cValue = cValue;
    }
    public String getaValue() {
        return aValue;
    }
    public void setaValue(String aValue) {
        this.aValue = aValue;
    }
    public String getbValue() {
        return  bValue;
    }
    public void setbValue(String bValue) {
        this.bValue = bValue;
    }
    public String getcValue() {
        return cValue;
    }
    public void setcValue(String cValue) {
        this.cValue = cValue;
    }
    public void validateaValue() {
        if (this.aValue == null) {
            throw new RuntimeException("You need to type in A side length!");
        }
        if(this.aValue.startsWith("0")) {
            throw new RuntimeException("Triangle length cannot be 0!");
        }
        if(this.aValue.matches("//d+")) {
            throw new RuntimeException("Triangle length can contain only digits!");
        }
    }
    public void validatebValue() {
        if (this.bValue == null) {
            throw new RuntimeException("You need to type in B side length!");
        }
        if(this.bValue.startsWith("0")) {
            throw new RuntimeException("Triangle length cannot be 0!");
        }
        if(this.bValue.matches("//d+")) {
            throw new RuntimeException("Triangle length can contain only digits!");
        }
    }
    public void validatecValue() {
        if (this.cValue == null) {
            throw new RuntimeException("You need to type in C side length!");
        }
        if(this.cValue.startsWith("0")) {
            throw new RuntimeException("Triangle length cannot be 0!");
        }
        if(this.cValue.matches("//d+")) {
            throw new RuntimeException("Triangle length can contain only digits!");
        }
    }

}
