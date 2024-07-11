<template>
    <BaseLayout>
        <main class="container">
            <div class="p-2 my-shadow p-md-5 mb-4 rounded bg-light mt-4 row">
                <div class="col-md-8">
                    <h1 class="display-4 fst-italic">
                        Hành trình bắt nhịp chuyển đổi số của
                        <span class="fw-bold">FPT</span>
                    </h1>
                    <p class="lead my-3">
                        tích cực đồng hành, hỗ trợ các địa phương phát triển
                        toàn diện các giải pháp chuyển đổi số nhằm xây dựng kinh
                        tế số - xã hội số - chính phủ số
                    </p>
                    <p class="lead mb-0">
                        <a
                            href="https://kinhtedothi.vn/fpt-hai-qua-ngotnho-chuyen-doi-so.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-2 bg-fpt-blue rounded text-decoration-none text-light fst-italic"
                            >Xem thêm</a
                        >
                    </p>
                </div>
                <div class="col-md-4 px-0">
                    <figure class="rounded overflow-hidden m-0 my-shadow">
                        <img
                            class="img-fluid"
                            src="@/assets/images/digital_trans/digital_trans_quiz_1.jpeg"
                            alt=""
                        />
                    </figure>
                </div>
            </div>

            <div class="row g-5">
                <div class="col-md-8">
                    <h3
                        class="pb-4 mb-4 fst-italic border-bottom d-flex align-items-center"
                    >
                        <span>Kể từ năm</span>
                        <div
                            id="dropHere"
                            class="d-flex ms-2 p-1 rounded bg-fpt-blue border border-2 border-dark"
                        >
                            <span class="invisible">Dữ kiện còn thiếu</span>
                        </div>
                    </h3>

                    <article class="blog-post">
                        <h2 class="blog-post-title">Sample blog post</h2>
                        <p class="blog-post-meta">
                            January 1, 2021 by <a href="#">Mark</a>
                        </p>

                        <p>
                            This blog post shows a few different types of
                            content that’s supported and styled with Bootstrap.
                            Basic typography, lists, tables, images, code, and
                            more are all supported as expected.
                        </p>
                        <hr />
                        <p>
                            This is some additional paragraph placeholder
                            content. It has been written to fill the available
                            space and show how a longer snippet of text affects
                            the surrounding content. We'll repeat it often to
                            keep the demonstration flowing, so be on the lookout
                            for this exact same string of text.
                        </p>
                        <h2>Blockquotes</h2>
                        <p>This is an example blockquote in action:</p>
                        <blockquote class="blockquote">
                            <p>Quoted text goes here.</p>
                        </blockquote>
                        <p>
                            This is some additional paragraph placeholder
                            content. It has been written to fill the available
                            space and show how a longer snippet of text affects
                            the surrounding content. We'll repeat it often to
                            keep the demonstration flowing, so be on the lookout
                            for this exact same string of text.
                        </p>
                        <h3>Example lists</h3>
                        <p>
                            This is some additional paragraph placeholder
                            content. It's a slightly shorter version of the
                            other highly repetitive body text used throughout.
                            This is an example unordered list:
                        </p>
                        <ul>
                            <li>First list item</li>
                            <li>Second list item with a longer description</li>
                            <li>Third list item to close it out</li>
                        </ul>
                        <p>And this is an ordered list:</p>
                        <ol>
                            <li>First list item</li>
                            <li>Second list item with a longer description</li>
                            <li>Third list item to close it out</li>
                        </ol>
                        <p>And this is a definiton list:</p>
                        <dl>
                            <dt>HyperText Markup Language (HTML)</dt>
                            <dd>
                                The language used to describe and define the
                                content of a Web page
                            </dd>
                            <dt>Cascading Style Sheets (CSS)</dt>
                            <dd>
                                Used to describe the appearance of Web content
                            </dd>
                            <dt>JavaScript (JS)</dt>
                            <dd>
                                The programming language used to build advanced
                                Web sites and applications
                            </dd>
                        </dl>
                        <h2>Inline HTML elements</h2>
                        <p>
                            HTML defines a long list of available inline tags, a
                            complete list of which can be found on the
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
                                >Mozilla Developer Network</a
                            >.
                        </p>
                        <ul>
                            <li>
                                <strong>To bold text</strong>, use
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >&lt;strong&gt;</code
                                >.
                            </li>
                            <li>
                                <em>To italicize text</em>, use
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >&lt;em&gt;</code
                                >.
                            </li>
                            <li>
                                Abbreviations, like
                                <abbr title="HyperText Markup Langage"
                                    >HTML</abbr
                                >
                                should use
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >&lt;abbr&gt;</code
                                >, with an optional
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >title</code
                                >
                                attribute for the full phrase.
                            </li>
                            <li>
                                Citations, like <cite>— Mark Otto</cite>, should
                                use
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >&lt;cite&gt;</code
                                >.
                            </li>
                            <li>
                                <del>Deleted</del> text should use
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >&lt;del&gt;</code
                                >
                                and <ins>inserted</ins> text should use
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >&lt;ins&gt;</code
                                >.
                            </li>
                            <li>
                                Superscript <sup>text</sup> uses
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >&lt;sup&gt;</code
                                >
                                and subscript <sub>text</sub> uses
                                <code
                                    class="language-plaintext highlighter-rouge"
                                    >&lt;sub&gt;</code
                                >.
                            </li>
                        </ul>
                        <p>
                            Most of these elements are styled by browsers with
                            few modifications on our part.
                        </p>
                        <h2>Heading</h2>
                        <p>
                            This is some additional paragraph placeholder
                            content. It has been written to fill the available
                            space and show how a longer snippet of text affects
                            the surrounding content. We'll repeat it often to
                            keep the demonstration flowing, so be on the lookout
                            for this exact same string of text.
                        </p>
                        <h3>Sub-heading</h3>
                        <p>
                            This is some additional paragraph placeholder
                            content. It has been written to fill the available
                            space and show how a longer snippet of text affects
                            the surrounding content. We'll repeat it often to
                            keep the demonstration flowing, so be on the lookout
                            for this exact same string of text.
                        </p>
                        <pre><code>Example code block</code></pre>
                        <p>
                            This is some additional paragraph placeholder
                            content. It's a slightly shorter version of the
                            other highly repetitive body text used throughout.
                        </p>
                    </article>

                    <article class="blog-post">
                        <h2 class="blog-post-title">Another blog post</h2>
                        <p class="blog-post-meta">
                            December 23, 2020 by <a href="#">Jacob</a>
                        </p>

                        <p>
                            This is some additional paragraph placeholder
                            content. It has been written to fill the available
                            space and show how a longer snippet of text affects
                            the surrounding content. We'll repeat it often to
                            keep the demonstration flowing, so be on the lookout
                            for this exact same string of text.
                        </p>
                        <blockquote>
                            <p>
                                Longer quote goes here, maybe with some
                                <strong>emphasized text</strong> in the middle
                                of it.
                            </p>
                        </blockquote>
                        <p>
                            This is some additional paragraph placeholder
                            content. It has been written to fill the available
                            space and show how a longer snippet of text affects
                            the surrounding content. We'll repeat it often to
                            keep the demonstration flowing, so be on the lookout
                            for this exact same string of text.
                        </p>
                        <h3>Example table</h3>
                        <p>And don't forget about tables in these posts:</p>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Upvotes</th>
                                    <th>Downvotes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alice</td>
                                    <td>10</td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>Bob</td>
                                    <td>4</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Charlie</td>
                                    <td>7</td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Totals</td>
                                    <td>21</td>
                                    <td>23</td>
                                </tr>
                            </tfoot>
                        </table>

                        <p>
                            This is some additional paragraph placeholder
                            content. It's a slightly shorter version of the
                            other highly repetitive body text used throughout.
                        </p>
                    </article>

                    <article class="blog-post">
                        <h2 class="blog-post-title">New feature</h2>
                        <p class="blog-post-meta">
                            December 14, 2020 by <a href="#">Chris</a>
                        </p>

                        <p>
                            This is some additional paragraph placeholder
                            content. It has been written to fill the available
                            space and show how a longer snippet of text affects
                            the surrounding content. We'll repeat it often to
                            keep the demonstration flowing, so be on the lookout
                            for this exact same string of text.
                        </p>
                        <ul>
                            <li>First list item</li>
                            <li>Second list item with a longer description</li>
                            <li>Third list item to close it out</li>
                        </ul>
                        <p>
                            This is some additional paragraph placeholder
                            content. It's a slightly shorter version of the
                            other highly repetitive body text used throughout.
                        </p>
                    </article>

                    <nav class="blog-pagination" aria-label="Pagination">
                        <a class="btn btn-outline-primary" href="#">Older</a>
                        <a
                            class="btn btn-outline-secondary disabled"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                            >Newer</a
                        >
                    </nav>
                </div>

                <div class="col-md-4">
                    <div
                        class="position-absolute p-4 mb-3 bg-light rounded"
                        style="width: 340px"
                    >
                        <h4 class="fst-italic">Dữ kiện còn thiếu trong bài</h4>
                        <div class="mb-0 d-flex gap-2">
                            <DragAndDrop2
                                v-for="answer in answers"
                                :key="answer.id"
                                :elementId="answer.id"
                            >
                                <button
                                    class="rounded my-shadow btn btn-primary"
                                >
                                    {{ answer.year }}
                                </button>
                            </DragAndDrop2>
                        </div>
                    </div>
                    <DragAndDrop elementId="hiddenSecret">
                        <div
                            class="p-4 bg-dark text-light rounded"
                            style="width: 340px; height: 200px"
                        >
                            <h4 class="fst-italic">Vai trò của FPT</h4>
                            <p class="mb-0">
                                FPT dẫn dắt quá trình chuyển đổi số quốc gia mở
                                ra vô vàn cơ hội phát triển.
                            </p>
                            <p class="mt-4 m-0 btn btn-light">
                                Kéo xuống để xem điều đặc biệt
                            </p>
                        </div>
                    </DragAndDrop>
                </div>
            </div>
        </main>
        <div class="container">
            <section class="row mt-5">
                <div class="col-12">
                    <div class="my-shadow p-3 mb-4 bg-body-secondary rounded-3">
                        <section class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">
                                    <figure class="rounded overflow-hidden m-0">
                                        <img
                                            class="img-fluid"
                                            src="@/assets/images/digital_trans/digital_trans_quiz_1.jpeg"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <div class="col-md-6">
                                    <figure class="rounded overflow-hidden m-0">
                                        <img
                                            class="img-fluid"
                                            src="@/assets/images/digital_trans/digital_trans_quiz_1.jpeg"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                        </section>
                        <div class="container-fluid mt-5">
                            <h4 class="fw-bold d-flex align-items-center">
                                <span
                                    >Tham gia sớm vào công cuộc chuyển đổi số
                                    từ</span
                                >
                                <div
                                    id="dropHere"
                                    class="ms-2 p-2 rounded bg-light border border-dark"
                                >
                                    <span class="invisible"
                                        >Dữ kiện còn thiếu</span
                                    >
                                </div>
                            </h4>
                            <p class="col fs-5">
                                FPT đã liên tục đón đầu và đưa về Việt Nam các
                                xu hướng công nghệ mới nhằm thực hiện quá trình
                                chuyển đổi số toàn diện chính phủ số - xã hội số
                                - kinh tế số.
                                <a
                                    href="https://kinhtedothi.vn/fpt-hai-qua-ngotnho-chuyen-doi-so.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >Xem thêm</a
                                >
                            </p>
                        </div>
                    </div>

                    <div class="my-shadow p-3 mb-4 bg-body-secondary rounded-3">
                        <h5 class="text-center fst-italic">
                            Dữ kiện còn thiếu
                        </h5>
                    </div>
                </div>
            </section>
        </div>
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import DragAndDrop2 from "@/components/feats/DigitalTrans/DragAndDrop2.vue";
import DragAndDrop from "@/components/feats/DigitalTrans/DragAndDrop.vue";

export default {
    components: { BaseLayout, DragAndDrop, DragAndDrop2 },
    data() {
        return {
            answers: [
                { id: 0, year: 2014 },
                { id: 1, year: 2016 },
                { id: 2, year: 2018 },
            ],
            correctYear: 2016,
        };
    },
    mounted() {
        const dropBox = document.getElementById("dropHere");

        if (dropBox) {
            dropBox.addEventListener("dragover", this.handleDragOver);
            dropBox.addEventListener("drop", this.handleDrop);
        }
    },
    methods: {
        /**
         * @param {DragEvent} event EventObject to handle drag.
         */
        handleDrop(event) {
            event.preventDefault();
            const elementId = event.dataTransfer.getData("elementId");

            const isCorrectAnswer = this.checkAnswer(elementId);

            if (isCorrectAnswer) {
                const element = document.getElementById(elementId);
                event.target.appendChild(element);
            }
        },
        handleDragOver(event) {
            event.preventDefault();
        },
        checkAnswer(elementId) {
            const isCorrectAnswer =
                this.answers[elementId].year == this.correctYear;

            return isCorrectAnswer;
        },
    },
};
</script>

<style scoped>
#mydiv {
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    text-align: center;
}

#mydivheader {
    padding: 10px;
    cursor: move;
    z-index: 10;
    background-color: #2196f3;
    color: #fff;
}
</style>