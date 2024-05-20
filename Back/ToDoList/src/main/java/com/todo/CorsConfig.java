package com.todo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 요청 경로에 대해
                .allowedOrigins("http://localhost:3000") // 허용할 프론트엔드 도메인
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 허용할 HTTP 메서드
                .allowedHeaders("*") // 허용할 헤더
                .exposedHeaders("Authorization") // 노출할 헤더
                .allowCredentials(true) // CredentialS 공유 허용
                .maxAge(3600); // 프리플라이트 요청 캐싱 시간 (초 단위)
    }
}
