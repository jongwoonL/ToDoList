package com.todo.model;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ToDoService {
	private final ToDoRepository toDoRepository;

    public List<ToDo> getMemos() {
        return this.toDoRepository.findAll();
    }
    
    public void createMemo(String subject, String content) {
        ToDo t = new ToDo();
        t.setSubject(subject);
        t.setContent(content);
        t.setCreateDate(LocalDateTime.now());
        this.toDoRepository.save(t);
    }
}
