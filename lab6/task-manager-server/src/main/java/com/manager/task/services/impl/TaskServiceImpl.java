package com.manager.task.services.impl;

import com.manager.task.entities.Task;
import com.manager.task.exceptions.EntityNotFoundException;
import com.manager.task.repositories.TaskRepository;
import com.manager.task.services.TaskService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Task", id));
    }

    @Transactional
    @Override
    public Task createTask(String title, String description) {
        Task task = new Task();
        task.setTitle(title);
        task.setDescription(description);
        return taskRepository.save(task);
    }

    @Transactional
    @Override
    public Task updateTask(Long id, String title, String description) {
        Task existing = getTaskById(id);
        existing.setTitle(title);
        existing.setDescription(description);
        return taskRepository.save(existing);
    }

    @Transactional
    @Override
    public void deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new EntityNotFoundException("Task", id);
        }
        taskRepository.deleteById(id);
    }
}
