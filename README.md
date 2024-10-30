# nsanesticks_server
 Simple web socket to test out nsanesticks(name update pending)


# Inside your Blueprint class
Event BeginPlay
    Create WebSocketSubscriptionHandler
    SubscribeWebSocket(Handler)
    Connect to WebSocket server at ws://your-server-ip:8080


# Inside the OnMessage event
Print String(IncomingMessage)
# Decode JSON if needed and update game state
