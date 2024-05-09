package com.todo.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.todo.model.ToDo;
import com.todo.model.ToDoRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class GetList {
	
	private final ToDoRepository toDoRepository;

    @GetMapping("/GetList")
    @ResponseBody
    public List<ToDo> list(Model model) {
        List<ToDo> toDoList = this.toDoRepository.findAll();
        model.addAttribute("toDoList", toDoList);
        return toDoList;
    }
}
