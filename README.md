Math typesetting using KaTex with chemical equation
==============

Use it for your book, by adding to your book.json:

```
{
    "plugins": ["katex-mhchem"]
}
```

then run `gitbook install`.

## Usage

```
Inline math: $\int_{-\infty}^\infty g(x) dx$

Block math:

$$
\int_{-\infty}^\infty g(x) dx
$$

Or using the templating syntax:

{% math %}\int_{-\infty}^\infty g(x) dx{% endblock %}

Block math:

{% math %}\int_{-\infty}^\infty g(x) dx{% endblock %}

Inline chamical equation: $\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$

Block chamical equation:

$$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$$

```

## Comparison with [gitbook-plugin-katex](https://github.com/GitbookIO/plugin-katex)

- Use single `$` for inline math and chamical equation.
- Update KaTex
- add mhchem extension

