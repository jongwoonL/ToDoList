package com.todo;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.todo.model.ToDo;
import com.todo.model.ToDoRepository;


@SpringBootTest
class ToDoListApplicationTests {

    @Autowired
    private ToDoRepository toDoRepository;

    @Test
    void testJpa() {        
        ToDo t1 = new ToDo();
        t1.setSubject("프로그래밍 공부하기2");
        t1.setContent("정말 열심히 공부하자2");
        t1.setCreateDate(LocalDateTime.now());
        this.toDoRepository.save(t1);  // 첫번째 질문 저장
    }
}