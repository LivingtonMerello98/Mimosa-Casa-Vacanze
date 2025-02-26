<script>
export default {
    name: "AppOurTeam",
    data() {
        return {
            ourTeam: [
                {
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/persone1.jpg',
                    name: 'Alex Buoyega',
                    role: 'Manager',
                    desc: 'Mr. Buoyega was born in one of Detroit’s poorest blocks, all before pursuing his successful managerial career in the future. For him, the breakthrough happened when he was able to get on Harvard University’s Law School list. After graduating from there, he was working for a few years for a…'
                },
                {
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/person21.jpg',
                    name: 'Kenneth Richardson',
                    role: 'Manager',
                    desc: 'A talented and creative leader, Kenneth is known among his colleagues for how good his organizing and team leading skills are… Working priorly for a number of American and International multi-billion dollar companies, Kenneth has built up a reputation and a skillset worthy of an…'
                },
                {
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/persone3.jpg',
                    name: 'Jonathan Christman',
                    role: 'Manager',
                    desc: 'Being as a devoted family man as he is, it is incredible how Jonathan has time left for managing multi-million dollar contracts, satisfying all of our clients and managing a vast team of professionals under his command. His resolve is well-known, making him one of the few executive…'
                },
                {
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/persone4.jpg',
                    name: 'Martin Gray',
                    role: 'Manager',
                    desc: 'Originally from London, at one point of his sophomore college year, Martin decided to turn the tables for his career and travel to the US, to try and get a Harvard MBA degree… Eventually, he succeeded in that, becoming one of the most respected executive managers in his field of work.'
                },
                {
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/persone5.jpg',
                    name: 'Mary Applebaum',
                    role: 'Manager',
                    desc: 'A Juneau, Alaska native, Mrs. Applebaum has come a long way since her high school graduation all the way up to getting a Brown University Master’s degree in Economics. Talented with the digits, she’s no less successful when it comes to managing the human resources of the company. Ask anyone at our office who…'
                },
                {
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/persone6.jpg',
                    name: 'Elisa Hansolo',
                    role: 'Manager',
                    desc: 'Born in New York City, Elisa always felt a strong urge for being an ambitious overachiever. Eventually, by the age of 25 she already had received her first Wall Street executive position, making her one of the youngest managers in the company. With her overall work experience spanning over 2 decades, Mrs. Hansolo is definitely the kind of a senior…'
                },
                {
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/persone7.jpg',
                    name: 'Emily Bluesome',
                    role: 'Manager',
                    desc: 'If you’d ask any of our workers, who is the executive manager that they’re always looking up and living up to, most likely Emily’s name will surface. Having a vast and thorough practical working experience lasting for more than 18 years, Mrs. Bluesome is an ideal manager, who is always…'
                },
                {
                    url: 'https://ld-wp73.template-help.com/wordpress/prod_5291/v1/wp-content/uploads/2020/12/persone8.jpg',
                    name: 'Dieane Beaton',
                    role: 'Manager',
                    desc: 'If you’d ever need to figure out a workaround for a complicated business problem, look no further than Diane’s desk for getting a thorough and all-rounded advice. She has been working in the industry for more than 20 years, knowing all the ins and outs perfectly and teaching each member of our team. Regardless of which exact type…'
                },
            ]
        }
    }

}
</script>

<template>
    <section class="our-team-section py-5">
        <div class="container py-5">
            <h2 class="py-5">Meet Our Team</h2>
            <div class="col-12  mb-5" style="background-color: rgba(0, 0, 0, 0.037);">
                <div class="col-1" style="height: 1px; background-color:#6EC1E4; margin: 0 auto;">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" v-for="member in ourTeam" :key="member.name">
                    <div class="container-card">
                        <div class="card-img">
                            <img :src="member.url" alt="">
                        </div>
                        <div class="card-member-content">
                            <div class="member-name py-3">
                                <h3>{{ member.name }}</h3>
                            </div>
                            <div class="member-position">
                                <span>{{ member.role }}</span>
                            </div>
                            <div class="member-info py-3">
                                <p>{{ member.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use 'src/assets/partials/mixin' as*;
@use 'src/assets/partials/variables' as*;

section {
    background-color: #F8F9FD;
}

h2 {
    font-weight: bold;
    font-size: $custom-title-section-size
}

h2 {
    font-weight: bold;
    font-size: $custom-title-section-size;
}

.member-name {
    color: #09C2DD;
}

.container-card {
    margin-bottom: 1rem;
}

.card-img img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}

@media (min-width: 576px) {
    .col-sm-6 {
        padding-right: 15px;
        padding-left: 15px;
    }
}

@media (min-width: 768px) {
    .col-md-4 {
        padding-right: 15px;
        padding-left: 15px;
    }
}

@media (min-width: 992px) {
    .col-lg-3 {
        padding-right: 15px;
        padding-left: 15px;
    }
}
</style>

