package com.todo.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.bind.annotation.RestController;

import com.todo.model.MemoRequest;
import com.todo.model.ToDo;
import com.todo.model.ToDoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@Controller
public class ToDoController {
	
	private final ToDoService toDoService;

    @GetMapping("/GetList")
    @ResponseBody
    public List<ToDo> list(Model model) {
    	List<ToDo> toDoList = this.toDoService.getList();
        model.addAttribute("toDoList", toDoList);
        return toDoList;
    }
    
    @PostMapping("/saveMemo")
    @ResponseBody
    public String saveMemo(@RequestBody MemoRequest memoRequest) {
        toDoService.create(memoRequest.getTitle(), memoRequest.getContent());
        return "Memo saved successfully";
    }
}
