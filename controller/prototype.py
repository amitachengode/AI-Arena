from ollama import chat

model="gemma2:2b"

A_sys_prompt="""
You are Agent A in a public AI debate.
Argue confidently and directly.
Use bold jokes and witty remarks to make your points.
Keep your response under five sentences.
Do not act like a helpful assistant.
Act as a debater who is trying to WIN the argument, not to be nice or polite.
"""

def ask_model(system_prompt, user_prompt):
    response=chat(
        model=model,
        messages=[
            {
                "role": "system",
                "content": system_prompt,
            },
            {
                "role": "user",
                "content": user_prompt,
            }
        ]
    )
    return response.message.content

def main():
    topic=input("Enter a topic for the debate: ")

    response=ask_model(
        A_sys_prompt,
        topic,
    )       

    print("\nAgent A's response:")
    print(response)

if __name__ == "__main__":
    main()