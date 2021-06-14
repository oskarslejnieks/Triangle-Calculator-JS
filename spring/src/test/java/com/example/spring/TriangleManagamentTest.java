package com.example.spring;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class TriangleManagamentTest {

    TriangleManagament triangleManagament;

    @BeforeEach
    public void setup() {
         triangleManagament = new TriangleManagament();
    }
    @Test
    public void shouldCreateEquilateralTriangle() {
        triangleManagament.newTriangle("5", "5", "5");
    }
    @Test
    public void shouldCreateIsoscelesTriangle() {
        triangleManagament.newTriangle("5", "5", "4");
    }
    @Test
    public void shouldCreateScaleneTriangle() {
        triangleManagament.newTriangle("5", "3", "4");
    }
    @Test
    public void shouldNotCreateTriangle() {
        triangleManagament.newTriangle("0", "5", "5");
    }
}