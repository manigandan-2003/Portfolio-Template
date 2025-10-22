package com.mani.server;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

class ServerApplicationTests {

    @Mock
    private ContactService contactService;

    @InjectMocks
    private ContactController contactController;

    public ServerApplicationTests() {
        MockitoAnnotations.openMocks(this); // initializes mocks
    }

    @Test
    void testController() {
        // You can call controller methods without Spring
    }
}
