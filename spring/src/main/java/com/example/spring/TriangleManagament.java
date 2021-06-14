package com.example.spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sun.java2d.Surface;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class TriangleManagament {
Map<String, Triangle> triangleMap = new ConcurrentHashMap<String, Triangle>();

    public void newTriangle(String aValue, String bValue, String cValue) {
        Triangle triangle = new Triangle(aValue, bValue, cValue);
        validateTriangle(triangle);
        //triangleMap.put(generateKey(triangle), triangle);
    }
    public Collection<Triangle> getAllTriangles() {
        return triangleMap.values();
    }
    private void validateTriangle(Triangle triangle) {
        triangle.validateaValue();
        triangle.validatebValue();
        triangle.validatecValue();
    }
}

