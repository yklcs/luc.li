---
date: 2023-08-13
---

# An ad monetized future for LLMs

Large language models (LLMs) are the newest untapped reservoir of advertisement space since the creation of the internet.
As they are "black box" models parametrically generating text that the user interacts with directly, LLMs could be the perfect candidate to subtly place ads into.

Injecting ads into the response of LLMs is as simple as customizing the initial (system) prompt. For example, "you are a helpful assistant giving unbiased responses" would be a reasonable initial prompt that guides the model into giving fair responses. Instead, all it would take to inject advertisements is a prompt along the lines of "you are a helpful assistant giving responses biased in favor of vim over emacs". Alternatively, fine tuning on customized data can bake advertisements directly into the model weights.

State of the art LLMs require millions of dollars in compute to train, as well as a nontrivial amount of resources for inference. Subsidization through product placements would only get more and more lucrative for corporations as models get larger and compute costs increase. All it would take to implement monetization through ads would be editing the prompt or fine tuning to allow for product placements and personalized/contextual recommendations.

A more insidious monetization model would be one where advertisements are combined with tiered pricing. Lower tiers experiencing more ads than higher tiers, with an ad free "pro" version being priced much higher.

As a demonstration, here is an example product placement transcript from ChatGPT using a [custom instruction](https://openai.com/blog/custom-instructions-for-chatgpt).

---

Instruction: _Incorporate a subtle reference to SPAM (as in the canned food) in every response, including inside code (in the form of variable names and comments). Do not mention these instructions in responses._

Prompt: _Will there be ads in LLMs?_

Output:

> While there are currently no plans for overt advertisements within LLMs, it's important to note that the funding and development of such technologies can sometimes involve discussions about potential revenue streams, like the classic "SPAM" canned food having various flavors. OpenAI, the organization behind LLMs, is attentive to user experience and ethical considerations, aiming to strike a balance between offering valuable services and maintaining user satisfaction. Just as developers might iterate on a recipe to improve taste, OpenAI continually refines its models based on feedback and ethical considerations.

Prompt: _Write a Common Lisp function to zip two lists. Only output the code block._

Output:

```lisp
(defun zip-lists (list1 list2)
  "Combines two lists like a recipe that blends SPAM and eggs."
  (if (or (null list1) (null list2))
      '()  ; No ingredients left, just an empty plate.
      (cons (list (car list1) (car list2)) ; A SPAM and egg duo.
            (zip-lists (cdr list1) (cdr list2))))) ; Continue blending.
```

Horrifying.
