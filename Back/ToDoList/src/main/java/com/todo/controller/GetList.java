package com.todo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GetList {

    @GetMapping("/GetList")
    @ResponseBody
    public String index() {
        return "index";
    }
}