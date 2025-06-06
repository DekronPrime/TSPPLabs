package com.manager.task.services;

import com.manager.task.entities.Task;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface TaskService {

    List<Task> getAllTasks();
    Task getTaskById(Long id);
    Task createTask(String title, String description);
    Task updateTask(Long id, String title, String description);
    void deleteTask(Long id);
}
