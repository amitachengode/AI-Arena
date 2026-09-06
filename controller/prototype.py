from ollama import chat

model="gemma2:2b"

def main():
    response=chat(
        model=model,
        messages=[
            {
                "role": "user",
                "content": "reply with exactly this: hello from the AI Arena    ",
            }
        ]
    )
    print(response.message.content)

if __name__ == "__main__":
    main()