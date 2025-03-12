<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vitepress'
import { base } from '../utils/base';

const { go } = useRouter();

onMounted(() => {
    go(base('/java-api/introduction'))
})
</script>